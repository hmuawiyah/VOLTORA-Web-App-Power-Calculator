const filteredGrouped = categories.reduce((acc, category) => {
  const filteredItems = grouped[category].filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase())
  )

  if (filteredItems.length > 0) {
    acc[category] = filteredItems
  }

  return acc
}, {} as Partial<typeof grouped>)
