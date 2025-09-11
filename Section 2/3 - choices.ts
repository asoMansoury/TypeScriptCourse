enum Role { ADMIN = 5, READ_ONLY = 3, AUTHOR = 1 }
let userRole:Role = Role.ADMIN;
userRole = 3;


//using literal types
let userRoleUnion: 'admin' | 'read-only' | 'author';


function setUserRole(role: 'admin' | 'read-only' | 'author') {
    userRoleUnion = role;
};

//Type aliases definition, instead of using union types directly or literal types and enum
type adminRole = 'admin';
type readOnlyRole = 'read-only';   
type UserRole = adminRole | readOnlyRole | 'author' | 'guest';
function setUserRoleEnum(role: UserRole) {
};


