import { useState } from 'react'
import Skeleton from './Skeleton'

/**
 * Image avec skeleton jusqu’à onLoad — évite les blocs blancs (mshots, screenshots, icônes).
 */
export default function LazyImage({
  src,
  alt = '',
  className = '',
  wrapperClassName = '',
  skeletonClassName = '',
  onLoad,
  onError,
  ...imgProps
}) {
  const [loaded, setLoaded] = useState(false)
  const [failed, setFailed] = useState(false)

  if (failed) return null

  return (
    <span className={`relative block overflow-hidden ${wrapperClassName}`}>
      {!loaded && (
        <Skeleton
          className={`absolute inset-0 z-0 ${skeletonClassName}`}
          rounded=""
        />
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} relative z-[1] transition-opacity duration-300 ease-out ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={(e) => {
          setLoaded(true)
          onLoad?.(e)
        }}
        onError={(e) => {
          setFailed(true)
          onError?.(e)
        }}
        {...imgProps}
      />
    </span>
  )
}
