import Image, { ImageProps } from 'next/image'
const OptimizedImage = (props: ImageProps) => <Image {...props} loading="lazy" />
export default OptimizedImage
