import { createI18n } from 'vue-i18n'
import en from './en.json'
import ea from './ea.json'
import pt_br from './pt_br.json'

const i18n = createI18n({
    locale: 'en',
    messages: {
        en,
        ea,
        pt_br
    }
})

export default i18n