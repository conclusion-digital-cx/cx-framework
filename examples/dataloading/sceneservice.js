export default new SceneService
//-----------
// Get Data
//-----------
function SceneService() {
    this.get = () => {
        return axios.get('https://konfig-api-production.herokuapp.com/api/scene/5a16ef4122626a14dcd75978')
            .then((response) => { return response.data })
    }
}