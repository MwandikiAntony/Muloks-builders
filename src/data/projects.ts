export type Category = 'Residential' | 'Commercial' | 'Industrial' | 'Renovations' | 'Infrastructure'

export const categories: Category[] = ['Residential', 'Commercial', 'Industrial', 'Renovations', 'Infrastructure']

export interface Project {
  slug: string
  name: string
  category: Category
  location: string
  summary: string
  overview: string
  scope: string[]
  features: string[]
  challenge: string
  solution: string
  status: string
  image: string
}

const status = 'Illustrative sample project, not a completed Muloks Builders project'

export const projects: Project[] = [
  {
    slug: 'hillview-family-residences', name: 'Hillview Family Residences', category: 'Residential', location: 'Location to be confirmed', image: 'residential', status,
    summary: 'A development of family maisonettes designed around durable finishes and efficient layouts.',
    overview: 'A sample residential scheme showing how Muloks Builders would approach a multi-unit family development, from foundations to handover.',
    scope: ['Site preparation and foundations', 'Reinforced concrete frame and masonry', 'Roofing and external works', 'Interior finishing and fittings'],
    features: ['Open-plan living areas', 'Rainwater harvesting provision', 'Secure shared compound', 'Quality-controlled finishes'],
    challenge: 'Sloping ground increased excavation and drainage requirements.',
    solution: 'Terraced foundations and a coordinated drainage layout kept the programme on track.'
  },
  {
    slug: 'central-business-offices', name: 'Central Business Offices', category: 'Commercial', location: 'Location to be confirmed', image: 'commercial', status,
    summary: 'A multi-storey office building planned for flexible tenancy and low operating cost.',
    overview: 'A sample commercial office development illustrating structured project management and coordinated building services.',
    scope: ['Structural frame and floor slabs', 'Facade and glazing', 'Electrical, plumbing and HVAC coordination', 'Office fit-out'],
    features: ['Flexible floor plates', 'Dedicated services risers', 'Fire protection coordination', 'Accessible entrances'],
    challenge: 'Tenant fit-out had to proceed while upper floors were still under construction.',
    solution: 'A phased handover schedule separated construction zones from fit-out areas.'
  },
  {
    slug: 'logistics-warehouse-complex', name: 'Logistics Warehouse Complex', category: 'Industrial', location: 'Location to be confirmed', image: 'industrial', status,
    summary: 'A large-span warehouse with loading bays, offices and hardstanding for heavy vehicles.',
    overview: 'A sample industrial facility showing steel structural works, concrete floors and external paving delivered as one package.',
    scope: ['Earthworks and ground improvement', 'Steel portal frame erection', 'Industrial concrete floor', 'Loading bays and paving'],
    features: ['Clear-span storage hall', 'Heavy-duty floor slab', 'Truck circulation yard', 'Integrated drainage'],
    challenge: 'Floor flatness tolerances were tight for racking and forklift operation.',
    solution: 'Controlled pours and laser screeding were specified and inspected for every bay.'
  },
  {
    slug: 'heritage-office-refurbishment', name: 'Heritage Office Refurbishment', category: 'Renovations', location: 'Location to be confirmed', image: 'renovation', status,
    summary: 'A full interior and exterior upgrade of an ageing office building while keeping it in use.',
    overview: 'A sample renovation programme illustrating structural rehabilitation, new services and a refreshed exterior.',
    scope: ['Structural assessment and repairs', 'Roof replacement', 'Services upgrade', 'Interior remodeling and repainting'],
    features: ['Restored facade', 'Modernized electrical and plumbing', 'Reconfigured office layout', 'Improved natural light'],
    challenge: 'Staff needed to keep working throughout the refurbishment.',
    solution: 'Work was sequenced floor by floor with clear dust and noise controls.'
  },
  {
    slug: 'estate-access-road-and-drainage', name: 'Estate Access Road and Drainage', category: 'Infrastructure', location: 'Location to be confirmed', image: 'civil', status,
    summary: 'Access road, stormwater drainage and paving serving a new residential estate.',
    overview: 'A sample civil works package showing earthworks, road base, drainage and paving coordinated with estate development.',
    scope: ['Earthworks and excavation', 'Road base and surfacing', 'Stormwater drains and culverts', 'Paving and kerbing'],
    features: ['Properly graded carriageway', 'Culverts sized for peak flow', 'Pedestrian walkways', 'Durable road surfacing'],
    challenge: 'Seasonal rain threatened excavation and compaction quality.',
    solution: 'Works were programmed around the dry season, with temporary drainage in place.'
  },
  {
    slug: 'riverside-townhouse-development', name: 'Riverside Townhouse Development', category: 'Residential', location: 'Location to be confirmed', image: 'building', status,
    summary: 'A row of townhouses combining compact footprints with generous interior space.',
    overview: 'A sample townhouse project illustrating repeatable construction methods that control cost and quality across units.',
    scope: ['Shared foundations and party walls', 'Roofing and structural works', 'Kitchen and bathroom installations', 'Landscaping and boundary works'],
    features: ['Repeatable unit design', 'Private courtyards', 'Efficient service layouts', 'Consistent finishes across units'],
    challenge: 'Keeping finish quality consistent across every unit in the row.',
    solution: 'Standard details and a staged inspection checklist were applied to each house.'
  }
]
