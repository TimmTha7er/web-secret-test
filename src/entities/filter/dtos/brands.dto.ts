class BrandsDTO {
  title
  items

  constructor(model) {
    this.title = model.title
    this.items = model.items.map(({ title, value }) => ({
      title,
      value,
    }))

    return { ...this }
  }
}

export { BrandsDTO }
