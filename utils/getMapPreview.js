export default function getMapPreview(lat, lng) {
  const imagePreviewUrl = `https://dev.virtualearth.net/REST/V1/Imagery/Map/CanvasLight/${lat}%2C${lng}/13?mapSize=600%2C300&format=png&pushpin=${lat}%2C${lng}%3B37%3B&key=AlwpktDc72V2e8IpNgd2Bykvyw1hhR23cv1bbtuOvv0XREl5SAAEbB1LPKhIzS8-`;
  return imagePreviewUrl;
}

export async function getAdress(lat, lng) {
  const url = `http://dev.virtualearth.net/REST/v1/Locations/${lat},${lng}?key=AlwpktDc72V2e8IpNgd2Bykvyw1hhR23cv1bbtuOvv0XREl5SAAEbB1LPKhIzS8-`;

  try {
    const response = await fetch(url);
    if (response.status === 200) {
      const data = await response.json();
      return data.resourceSets[0].resources[0].address.formattedAddress;
    }
  } catch (e) {
    return "No address Found";
  }
  // return response;
}
