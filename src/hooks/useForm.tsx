
export const useForm = () => {
    const serialize = (form: HTMLFormElement) => {
        var obj: any = {};
        const formData = new FormData(form);
        for (let key of formData.keys()) {
            obj[key] = formData.get(key);
        }
        return obj;
    }
    return {
        serialize
    }
}
