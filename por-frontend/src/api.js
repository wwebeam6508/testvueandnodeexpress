import axios from '@/axios'

export default {
  methods: {
    async GetHttp (api) {
      let data = {}
      try { 
        const auth = { headers: { "Content-Type":"application/json" } }

        let res = await axios.get(`/${api}`, auth)
        data = { res, status: 'success' }
      } catch (e) { 
        data = { status: 'error' }
      } finally {
        return data
      }
    }
  }
}