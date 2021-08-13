import AsyncStorage from "@react-native-async-storage/async-storage";

export async function getStorage(item) {
    let data = await AsyncStorage.getItem(item);//.then((res) => {
    try {
        return JSON.parse(data);
    } catch(e) {
        return data;
    }
}
