export const company = {
  name: 'Muloks Builders',
  phone: '+254 000 000 000',
  whatsapp: '254000000000',
  email: 'info@example.com',
  address: 'Office address to be provided',
  hours: 'Monday to Friday, 8:00 to 17:00'
}

export interface Service {
  slug: string
  title: string
  summary: string
  items: string[]
}

export const services: Service[] = [
  { slug: 'building', title: 'Building Construction', summary: 'Complete building construction for residential, commercial and institutional clients, delivered with structural integrity, disciplined workmanship and dependable programme control.', items: ['Residential house construction', 'Commercial building construction', 'Apartment and multi-unit developments', 'Office buildings', 'Institutional facilities', 'New building developments'] },
  { slug: 'residential', title: 'Residential Construction', summary: 'Residential developments engineered for comfort, durability and lasting appeal, from custom homes to multi-unit schemes aligned with your lifestyle or investment brief.', items: ['Bungalows and maisonettes', 'Luxury homes', 'Townhouses', 'Apartment developments', 'Custom home construction', 'Residential extensions'] },
  { slug: 'commercial', title: 'Commercial Construction', summary: 'Commercial facilities built to support operations and protect asset value, delivered for businesses, investors and property developers.', items: ['Office buildings', 'Retail spaces and shopping complexes', 'Warehouses', 'Hotels and hospitality facilities', 'Commercial renovations', 'Business premises development'] },
  { slug: 'renovation', title: 'Renovation and Remodeling', summary: 'Renovation and remodeling programmes that restore performance, modernize presentation and extend the service life of existing buildings.', items: ['Building renovations', 'Interior remodeling', 'Exterior improvements', 'Structural rehabilitation', 'Office renovations', 'Residential upgrades', 'Property extensions'] },
  { slug: 'civil', title: 'Civil Engineering and Infrastructure', summary: 'Civil and infrastructure works executed to engineering requirements, with rigorous technical coordination and a focus on safe, sustainable development.', items: ['Road construction', 'Drainage systems', 'Stormwater management', 'Foundation works', 'Earthworks and excavation', 'Concrete works', 'Site infrastructure development', 'Paving and external works'] },
  { slug: 'design', title: 'Architectural Design and Planning Coordination', summary: 'Design coordination, planning support and construction documentation that move your development concept into a buildable, approvable scope.', items: ['Architectural design coordination', 'Building layout planning', 'Concept development', 'Construction drawings coordination', 'Space planning', 'Design consultation', 'Development feasibility coordination'] },
  { slug: 'interiors', title: 'Interior Design and Finishing', summary: 'Interior finishing and fit-out that raise the functionality, presentation and market value of residential and commercial spaces.', items: ['Floor and wall finishes', 'Ceiling installation', 'Painting and decoration', 'Kitchen installations', 'Bathroom finishing', 'Interior partitioning', 'Doors and windows', 'Office interior fit-outs'] },
  { slug: 'roofing', title: 'Roofing and Structural Works', summary: 'Roofing and structural works specified for safety, durability and long-term building performance.', items: ['Roof installation', 'Roof replacement', 'Roof repairs', 'Steel structural works', 'Reinforced concrete works', 'Masonry', 'Foundation construction', 'Structural maintenance'] },
  { slug: 'mep', title: 'Electrical, Plumbing and Mechanical Installations', summary: 'Coordinated electrical, plumbing and mechanical services that keep your building efficient, compliant and comfortable to operate.', items: ['Electrical installations', 'Plumbing systems', 'Water supply systems', 'Sanitary installations', 'HVAC coordination', 'Fire protection system coordination', 'Building services maintenance'] },
  { slug: 'maintenance', title: 'Property Maintenance and Facilities Management', summary: 'Planned maintenance and facilities support that protect building performance, limit operational disruption and preserve property value.', items: ['Preventive maintenance', 'Building inspections', 'Plumbing and electrical repairs', 'Painting and refurbishment', 'General property maintenance', 'Facilities management support'] },
  { slug: 'consultancy', title: 'Construction Consultancy and Project Management', summary: 'Structured planning, supervision and reporting that keep your project on programme and on budget from first estimate to final handover.', items: ['Project planning', 'Construction supervision', 'Cost estimation', 'Budget management', 'Construction scheduling', 'Contractor coordination', 'Site inspections', 'Project progress reporting', 'Procurement coordination'] },
  { slug: 'qs', title: 'Quantity Surveying and Cost Management', summary: 'Cost planning, budgeting and financial oversight that give you cost certainty and control across the full project lifecycle.', items: ['Preliminary cost estimates', 'Bills of quantities coordination', 'Cost planning', 'Material quantity assessments', 'Tender documentation support', 'Cost control', 'Construction budget reviews'] }
]

export const advantages = [
  { title: 'Quality Craftsmanship', body: 'Durable structures delivered through specified materials, skilled trades and close attention to detail at every stage.' },
  { title: 'Professional Project Management', body: 'Clear coordination, defined accountability and active programme control to keep delivery efficient and on schedule.' },
  { title: 'Client-Centered Solutions', body: 'Construction solutions shaped around your requirements, project objectives and approved budget.' },
  { title: 'Cost Efficiency', body: 'Disciplined resource planning and construction methods that protect value without compromising quality.' },
  { title: 'Safety and Compliance', body: 'Safe working environments and adherence to applicable construction standards, regulations and statutory requirements.' },
  { title: 'End-to-End Service', body: 'A single point of accountability from initial consultation and planning through construction and formal project handover.' }
]
