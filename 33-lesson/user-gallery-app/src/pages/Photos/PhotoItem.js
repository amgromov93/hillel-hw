export default function PhotoItem({ photo }) {
  
  return (
    <img id={photo.id} src={photo.thumbnailUrl} alt="user photos"/>
  )
}