// file with lower case usually for like kind of the root of application where a file that exports plain objects, plain functions, or constant
/// <reference types="@types/google.maps" />

import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const user = new User();
const company = new Company();

const mapID = document.getElementById('map');
const mapNotNull = mapID!;

const customMap = new CustomMap(mapNotNull);

customMap.addMarker(user);
customMap.addMarker(company);

// Bad code
// customMap.addUserMarker(user);
// customMap.addCompanyMarker(company);