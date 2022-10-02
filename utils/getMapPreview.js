export default function getMapPreview(lat, lng) {
  const imagePreviewUrl = `https://dev.virtualearth.net/REST/V1/Imagery/Map/CanvasLight/${lat}%2C${lng}/13?mapSize=600%2C300&format=png&pushpin=${lat}%2C${lng}%3B37%3B&key=AlwpktDc72V2e8IpNgd2Bykvyw1hhR23cv1bbtuOvv0XREl5SAAEbB1LPKhIzS8-`;
  return imagePreviewUrl;
}
