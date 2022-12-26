import { Data } from '@/types/global'
import { Range } from '@/entities/filter/ui/range/range.interface'

class RangeDTO {
  min: Range['min']
  max: Range['max']
  title: Range['title']

  constructor(model: Data['filters'][0]) {
    this.min = model.min.replace('.00', '')
    this.max = model.max.replace('.00', '')
    this.title = model.title

    return { ...this }
  }
}

export { RangeDTO }
