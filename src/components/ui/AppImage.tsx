import { useMemo, useState } from "react";
import Image, { ImageProps } from "next/image";

type AppImageProps = Omit<ImageProps, "alt"> & {
  alt: string;
  className?: string;
  wrapperClassName?: string;
};

function isRemoteHttp(src: ImageProps["src"]) {
  return typeof src === "string" && /^https?:\/\//i.test(src);
}

export default function AppImage(props: AppImageProps) {
  const {
    width,
    height,
    fill,
    sizes,
    className,
    wrapperClassName,
    style,
    ...rest
  } = props;

  // If caller didn't provide dimensions, default to `fill`.
  // This matches our usage inside fixed aspect-ratio containers.
  const shouldFill = fill ?? (!width && !height);
  const remoteSrc = useMemo(() => (typeof props.src === "string" ? props.src : null), [props.src]);
  const [hasError, setHasError] = useState(false);

  // For maximum compatibility: any remote URL is rendered without Next optimizer.
  // If the remote host blocks hotlinking, no frontend can force it to load;
  // in that case we show a fallback with a direct link.
  const shouldUnoptimized = (props.unoptimized ?? false) || isRemoteHttp(props.src);

  if (shouldFill) {
    return (
      <div className={`relative block h-full w-full ${wrapperClassName ?? ""}`}>
        {hasError && remoteSrc ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-md bg-neutral-200/70 p-4 text-center">
            <div className="text-sm font-medium text-neutral-800">
              Image failed to load
            </div>
            <a
              href={remoteSrc}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-white px-3 py-2 text-xs font-medium text-neutral-900 shadow-sm transition hover:shadow-md"
            >
              Open image
            </a>
          </div>
        ) : null}
        <Image
          {...rest}
          fill
          sizes={sizes ?? "100vw"}
          className={className ?? "object-cover"}
          style={{ ...style }}
          unoptimized={shouldUnoptimized}
          onError={(e) => {
            props.onError?.(e);
            setHasError(true);
          }}
        />
      </div>
    );
  }

  return (
    <div className={wrapperClassName}>
      {hasError && remoteSrc ? (
        <div className="flex flex-col items-center justify-center gap-3 rounded-md bg-neutral-200/70 p-4 text-center">
          <div className="text-sm font-medium text-neutral-800">
            Image failed to load
          </div>
          <a
            href={remoteSrc}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-white px-3 py-2 text-xs font-medium text-neutral-900 shadow-sm transition hover:shadow-md"
          >
            Open image
          </a>
        </div>
      ) : null}
      <Image
        {...rest}
        width={width}
        height={height}
        sizes={sizes}
        className={className}
        style={style}
        unoptimized={shouldUnoptimized}
        onError={(e) => {
          props.onError?.(e);
          setHasError(true);
        }}
      />
    </div>
  );
}


