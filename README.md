## Architecture & Rules

### FRONTEND – NEXT.JS (Pages Router)

#### A1) Cấu trúc thư mục (GIỮ NGUYÊN, không đổi)

`src/`

- `pages/` – Pages Router (routing trung tâm)
- `features/` – Flow theo màn hình (UI orchestration)
- `domains/` – Nghiệp vụ cốt lõi (model + query hooks)
- `components/` – Shared UI (không phụ thuộc domain)
- `providers/` – App-level providers
- `contexts/` – Global state nhẹ
- `lib/` – Infra / third-party setup
- `services/` – Nơi duy nhất gọi HTTP (axios)
- `types/` – Cross-domain types
- `utils/` – Hàm thuần, không đụng React
- `config/` – env/permission/routes constants
- `styles/` – `globals.css`

#### A2) Trách nhiệm từng tầng (Separation of Concerns)

1. `pages/` (Routing-only)
   - Chỉ làm routing, không xử lý nghiệp vụ.
   - Không gọi API, không import axios/service/hook/domain.
   - Chỉ import 1 “Page Container” từ `features/*` và (nếu cần) layout từ `components/layout`.
   - Page chỉ làm:
     - đọc query/params từ Next router
     - render feature container với props cơ bản (id, mode…)
     - set SEO/head nếu dự án có quy ước

2. `features/` (UI orchestration theo màn hình)
   - Chứa container component cho từng màn hình/flow.
   - Được phép:
     - dùng hooks (ở `features/*/hooks` hoặc `domains/*/*.hooks.ts`)
     - ghép nhiều shared UI component / feature UI component
   - Không được:
     - gọi axios trực tiếp
     - nhét business rules “cốt lõi” (phải nằm trong domain/service)

3. `components/` (Shared UI)
   - Chỉ render UI, không gọi API, không import `services/`, không import `domains/`.
   - Không phụ thuộc feature/domain.
   - Dùng Tailwind cho layout/spacing.
   - Ant Design dùng cho component phức tạp theo rule UI.

4. `hooks/` + `features/*/hooks/` + `domains/*/*.hooks.ts` (Logic-only)
   - Hook không render JSX.
   - Hook được phép gọi:
     - `services/*` (HTTP)
     - `domains/*` (types, keys, mappers)
   - Hook chịu trách nhiệm:
     - orchestration logic (pagination, debounce, permission, socket sync)
     - mapping dữ liệu cho UI (không biến hook thành UI)

5. `services/` (HTTP-only)
   - NƠI DUY NHẤT được phép dùng axios để gọi API.
   - Không xử lý UI, không chứa logic UI/form.
   - Business logic “cốt lõi” không đặt ở đây; service tập trung vào:
     - request/response transport
     - typing request/response
     - chuẩn hoá lỗi (throw typed error)

6. `domains/` (Business model + domain hooks)
   - Chứa:
     - `*.types.ts`: model/type
     - `*.keys.ts`: react-query keys
     - `*.mappers.ts`: map/normalize DTO → model
     - `*.hooks.ts`: react-query hooks gọi `services/*`
     - `*.api.ts`: domain adapter, KHÔNG gọi axios, chỉ gọi hàm trong `services/*` + mapping/typing
   - Mục tiêu: domain là “hợp đồng nghiệp vụ” (types + rules mapping + query keys), giúp scale.

7. `providers/` và `contexts/`
   - `providers/`: wrapper lắp Query/Auth/Notification vào `_app.tsx` cho gọn.
   - `contexts/`: chỉ quản lý global state nhẹ (auth status, notification list, conversation state realtime…).
   - Context không chứa business logic phức tạp (không gọi trực tiếp repo/service theo kiểu “God Context”).

8. `lib/`, `utils/`, `types/`, `config/`
   - `lib/`: setup third-party (axios instance, interceptors, queryClient, socket client, i18n).
   - `utils/`: hàm thuần (format/storage), không đụng React.
   - `types/`: cross-domain types (Pagination, ApiResponse…).
   - `config/`: env/permission/routes constants, không hardcode URL.

#### A3) Luồng import (Dependency Rules)

- `pages/*` → chỉ import `features/*` và `components/layout`
- `features/*` → import `hooks/*`, `domains/*`, `components/*`
- `components/*` → chỉ import `utils/*`, `types/*` (không import `domains/services`)
- `domains/*` → import `services/*`, `types/*`, `utils/*`, `lib/react-query` (nếu cần)
- `services/*` → import `lib/http/*`, `config/*`, `types/*`
- `lib/*` → import `config/*`

#### A4) Next.js rules (BẮT BUỘC)

- `Link`: luôn dùng `next/link`, không dùng `<a>` cho routing nội bộ.
- `Image`: luôn dùng `next/image` cho ảnh tĩnh/remote (trừ khi requirement đặc biệt).
- SSR safety: không dùng `window/document` nếu chưa check `typeof window !== 'undefined'`.
- Component nặng: dùng `next/dynamic` (và `ssr: false` nếu phụ thuộc browser APIs).
- Không hardcode URL: lấy từ `config/env.ts` hoặc `config/routes.ts`.

#### A5) UI rules (Tailwind + Ant Design)

- Tailwind: layout, spacing, grid/flex, responsive, typography, color tokens.
- Ant Design: component phức tạp như Form, Modal, Table, Drawer, Dropdown, DatePicker, Upload, Notification/Message…
- Không “bọc chồng chéo vô nghĩa”:
  - không bọc AntD bằng nhiều `div` chỉ để set style trùng lặp
  - Tailwind chỉ chỉnh layout quanh AntD, không “đánh nhau” với CSS nội bộ AntD

#### A6) TypeScript & code style

- Không dùng `any`.
- Hạn chế `unknown`; ưu tiên định nghĩa `type/interface` rõ.
- File/component naming rõ nghĩa, thống nhất convention.
- Mỗi file 1 trách nhiệm, không gộp routing + logic + API.
