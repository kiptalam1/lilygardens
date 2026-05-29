# Tables

1. Users
System authentication + admin access.
id
name
nationalId
phone
passwordHash
role            // admin | tenant(optional later)isActive
createdAt
updatedAt

2. Units
Physical rentable rooms/apartments.
id
name             // A101, Room 3
capacity
rentAmount
description
createdAt
updatedAt

3. Tenants
Real-world occupants.
id
fullName
nationalId
phone
email?         
emergencyContact?
userId?           // nullable FK -> Users.id
createdAt
updatedAt
userId is optional because not all tenants need accounts.

4. Tenancies
Occupancy lifecycle.
id
unitId            // FK -> Units.id
status            // active | ended |terminated
householdType     // family | shared
startDate
endDate?
notes?
createdAt
updatedAt
This is the most important table.

5. TenancyTenants
Join table for multi-occupancy.
id
tenancyId         //FK -> Tenancies.id
tenantId          // FK -> Tenants.id
isPrimaryContact
rentShare?
createdAt
Supports: families | roommates | shared rent

6. Payments
id
tenancyId
amount
paymentDate
method
reference?
status
createdAt

7. MaintenanceRequests
id
unitId
title
description
status
priority
createdAt
updatedAt

Final relationship model
Users
  ↑
optionalTenants
  ↑
TenancyTenants
  ↑
Tenancies
  ↑
Units
