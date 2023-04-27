import { createI18n } from 'vue-i18n'

//import language files in json
import en from '../languages/en.json'
import ea from '../languages/ea.json'
import pt_br from '../languages/pt_br.json'

const i18n = createI18n({
    locale: 'en',
    messages: {
        en,
        ea,
        pt_br
    }
})

export default i18n