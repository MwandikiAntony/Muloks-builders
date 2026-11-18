const unsplash = (id: string) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1400&q=75`
const pexels = (id: string, slug = `pexels-photo-${id}`) => `https://images.pexels.com/photos/${id}/${slug}.jpeg?auto=compress&cs=tinysrgb&w=1400`

export const images: Record<string, string> = {
  hero: unsplash('1722079358008-2c72a8973998'),
  building: pexels('53176', 'architecture-iron-steel-building-53176'),
  residential: unsplash('1706808849777-96e0d7be3bb7'),
  commercial: unsplash('1768758925977-6942e9bfade1'),
  renovation: unsplash('1786618315979-2dbbfd3b38a7'),
  civil: unsplash('1565775501514-4db91a79ee67'),
  design: pexels('3862135'),
  industrial: pexels('1784543')
}
