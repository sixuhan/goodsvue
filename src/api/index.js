import axios from 'axios'

var request = axios.create({
    baseURL:'http://localhost:3000/api'
})

export function test(){
    return request('test/a')
}