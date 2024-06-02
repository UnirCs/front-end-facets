// JSON de ejemplo para usar en caso de fallo en la llamada a Axios
// Se incluye simplemente para que se pueda mostrar la aplicacion sin necesidad de hacer llamadas a la API
// La funcionalidad de la aplicacion se verá afectada, ya que no se podrá filtrar ni ordenar los datos

export const exampleData = {
    "employees": [
        {
            "id": "EHBgiIwBJHVwbqnQhu10",
            "firstName": "CIERRA",
            "lastName": "TOOLS",
            "interests": "R/C Boats,Dolls,Cloud Watching,Animals/pets/dogs,Crocheting,Casino Gambling",
            "age": "35",
            "dateOfJoining": "2014-01-13",
            "address": "8445 Green Street Morristown, NJ 07960",
            "designation": "Senior Software Engineer",
            "gender": "Female",
            "maritalStatus": "Married",
            "salary": 61000.0
        },
        {
            "id": "EXBgiIwBJHVwbqnQhu10",
            "firstName": "JEWELL",
            "lastName": "URESTI",
            "interests": "Running,Aircraft Spotting,Pottery,TV watching,YoYo,Juggling",
            "age": "33",
            "dateOfJoining": "2003-02-19",
            "address": "70 East Gainsway Lane West Deptford, NJ 08096",
            "designation": "Senior Software Engineer",
            "gender": "Male",
            "maritalStatus": "Unmarried",
            "salary": 66000.0
        },
        {
            "id": "EnBgiIwBJHVwbqnQhu10",
            "firstName": "HERSCHEL",
            "lastName": "BARTOLOME",
            "interests": "Cheerleading,Snorkeling,Reading To The Elderly,Writing Music,Darts",
            "age": "35",
            "dateOfJoining": "2008-06-02",
            "address": "9261 Andover St. De Pere, WI 54115",
            "designation": "Senior Software Engineer",
            "gender": "Male",
            "maritalStatus": "Unmarried",
            "salary": 70000.0
        },
        {
            "id": "E3BgiIwBJHVwbqnQhu10",
            "firstName": "DORSEY",
            "lastName": "CHANNER",
            "interests": "Airsofting",
            "age": "32",
            "dateOfJoining": "2003-02-10",
            "address": "43 Carson Street East Haven, CT 06512",
            "designation": "Senior Software Engineer",
            "gender": "Male",
            "maritalStatus": "Unmarried",
            "salary": 61000.0
        },
        {
            "id": "FHBgiIwBJHVwbqnQhu10",
            "firstName": "TAI",
            "lastName": "GOTTSHALL",
            "interests": "R/C Helicopters,Spending time with family/kids,Working on cars",
            "age": "34",
            "dateOfJoining": "2003-09-30",
            "address": "9956 Bradford Circle Piqua, OH 45356",
            "designation": "Senior Software Engineer",
            "gender": "Female",
            "maritalStatus": "Unmarried",
            "salary": 63000.0
        }
    ],
    "aggs": {
        "civilStatusValues": [
            {
                "key": "Married",
                "count": 5022
            },
            {
                "key": "Unmarried",
                "count": 4977
            }
        ],
        "genderValues": [
            {
                "key": "Male",
                "count": 5026
            },
            {
                "key": "Female",
                "count": 4973
            }
        ],
        "salaryValues": [
            {
                "key": "Hasta 62K $",
                "count": 5289
            },
            {
                "key": "De 62K$ a 68K$",
                "count": 3119
            },
            {
                "key": "A partir de 68K $",
                "count": 1591
            }
        ],
        "designationValues": [
            {
                "key": "Senior Software Engineer",
                "count": 5735
            },
            {
                "key": "Software Engineer",
                "count": 4264
            }
        ],
        "ageValues": [
            {
                "key": "Hasta 28 años",
                "count": 2815
            },
            {
                "key": "De 29 a 35 años",
                "count": 7184
            },
            {
                "key": "A partir de 35 años",
                "count": 0
            }
        ]
    }
};