import { Grid } from '../grid'
import { Registry } from './registry'

export const GridRegistry = Registry.create<
  Grid.CommonDefinition,
  Grid.Presets
>({
  type: 'grid',
})

GridRegistry.register(Grid.presets, true)
