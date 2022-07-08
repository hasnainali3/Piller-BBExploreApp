import { BASEURL } from "../constants"

export const getCharacterListing = async () => {
    const response = await fetch(BASEURL);
    const responseJson = await response.json()

    return responseJson
}