export default class NotepadService {

    static getNotepads() {
        return fetch("https://api.github.com/gists")
    }

}

