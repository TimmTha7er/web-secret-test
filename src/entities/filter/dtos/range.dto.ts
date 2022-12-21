class RangeDTO {
  min
  max
  title

  constructor(model) {
    this.min = model.min.replace('.00', '')
    this.max = model.max.replace('.00', '')
    this.title = model.title

    return { ...this }
  }
}

export { RangeDTO }
