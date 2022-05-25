import Vue, { VueConstructor } from 'vue'
import { LooseDictionary } from './ts-helpers'

export interface QIconPicker extends Vue {
    /**
     * `v-model`; The selected icon
     */
    value? : string
    /**
     * The name of a [Quasar Icon Set](https://quasar.dev/options/quasar-icon-sets)
     */
    iconSet? : 'material-icons' | 'material-icons-outlined' | 'material-icons-round' | 'material-icons-sharp' | 'ionicons-v4' | 'mdi-v4' | 'mdi-v5' | 'mdi-v6' | 'fontawesome-v5' | 'eva-icons' | 'themify' | 'bootstrap-icons'
    /**
     * An array of objects containing icon information. The object must contain the key `name` with the value being the icon name (ie: `{ name: 'bolt' }`). _**Note:** the icons used must already be loaded by Quasar._
     */
    icons? : IconNameArray
    /**
     * Icons will be filtered by the passed string
     */
    filter? : string
    /**
     * An array of tags to be used to do filtering by category
     */
    tags? : StringArray
    /**
     * Use less of a foot print for the component
     */
    dense? : boolean
    /**
     * Turns tooltips on for each displayed icon (shows the icon name)
     */
    tooltips? : boolean
    /**
     * hides the footer area when `pagination` is enabled
     */
    noFooter? : boolean
    /**
     * Any color from the [Quasar Color Pallete](https://quasar.dev/style/color-palette) or a CSS color (#, rgb, rgba, hls, etc)
     */
    color? : string
    /**
     * Any color from the [Quasar Color Pallete](https://quasar.dev/style/color-palette) or a CSS color (#, rgb, rgba, hls, etc)
     */
    backgroundColor? : string
    /**
     * Any color from the [Quasar Color Pallete](https://quasar.dev/style/color-palette) or a CSS color (#, rgb, rgba, hls, etc)
     */
    selectedColor? : string
    /**
     * Any color from the [Quasar Color Pallete](https://quasar.dev/style/color-palette) or a CSS color (#, rgb, rgba, hls, etc)
     */
    selectedBackgroundColor? : string
    /**
     * The font-size to use for the icons. Any acceptable CSS size can be used
     */
    fontSize? : string
    /**
     * For pagination purposes uses Quasar's pagination component. Use `pagination.sync` to synchronize the data. You can use `page` and `itemsPerPage` to control the pagination. QIconPicker will set `totalPages` depending on `icon-set` or `icons` properties. If using a `filter` the page will automatically be reset to 1
     */
    pagination? : Pagination
    /**
     * Turns on animation
     */
    animated? : boolean
    /**
     * When animated property is true, transition to use for previous paginated view
     */
    transitionPrev? : string
    /**
     * When animated property is true, transition to use for next paginated view
     */
    transitionNext? : string
    /**
     * If paginated, will go to previous page if not on 1st page
     */
    prevPage (): void
    /**
     * If paginated, will go to next page, if not on last page
     */
    nextPage (): void
}

export interface IconNameArray {
    /**
     * The icon name
     */
    name? : string
}

import { StringArray, Pagination } from './types'

declare module 'vue/types/vue' {
    interface Vue {
    }
}
export * from './types'
export * from './ts-helpers'
export as namespace QIconPicker
export const QIconPicker: VueConstructor<QIconPicker>

