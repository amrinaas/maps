// instructions to every other class on how they can be an argument to 'addMarker'
// if another class or just any other object inside on app has a loc that has lat and lng can be an argument to 'addMarker'
export interface Type {
    location: {
        lat: number,
        lng: number
    };
    markerContent(): string;
    color: string;
}

export class CustomMap {
    private googleMap: google.maps.Map;
    
    constructor(mapNotNull: HTMLElement) {
        this.googleMap = new google.maps.Map(mapNotNull, {
            zoom:1,
            center: {
              lat:0,
              lng:0
            }
        });
    }

    // ====================================
    // best solution (create interface)
    // ====================================
    addMarker(type: Type): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: type.location.lat,
                lng: type.location.lng,
            }
        })

        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: type.markerContent()
            });

            infoWindow.open(this.googleMap, marker)
        })
    }

    
    // =========================================
    // bad code
    // =========================================
    // addUserMarker(user: User): void {
    //     new google.maps.Marker({
    //         map: this.googleMap,
    //         position: {
    //             lat: user.location.lat,
    //             lng: user.location.lng,
    //         }
    //     })
    // }
    // addCompanyMarker(company: Company): void {
    //     new google.maps.Marker({
    //         map: this.googleMap,
    //         position: {
    //             lat: company.location.lat,
    //             lng: company.location.lng,
    //         }
    //     })
    // }

    // ==========================================================
    // good code but not the best if we have a couple of class
    // ==========================================================
    // addMarker(mappable: User | Company): void {
    //     new google.maps.Marker({
    //         map: this.googleMap,
    //         position: {
    //             lat: mappable.location.lat,
    //             lng: mappable.location.lng,
    //         }
    //     })
    // }
}