import axios from 'axios';

module.exports = {
    fetchData: function () {
        var URI = "https://gist.githubusercontent.com/Saikat-Sinha/257a2b69571afece9886f58ac0eaced7/raw/1489dfa75a05cb4808e8d0c5bae3e7caf9da1352/commentData.json";

        return axios.get(URI)
            .then(function(response){
                return response.data;
            })

    }
}
