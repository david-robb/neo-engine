export const ASTEROID_JSON_LIST = JSON.parse(`{
    "links": {
        "next": "http://api.nasa.gov/neo/rest/v1/feed?start_date=2025-11-15&end_date=2025-11-22&detailed=true&",
        "previous": "http://api.nasa.gov/neo/rest/v1/feed?start_date=2025-11-01&end_date=2025-11-08&detailed=true&",
        "self": "http://api.nasa.gov/neo/rest/v1/feed?start_date=2025-11-08&end_date=2025-11-15&detailed=true&"
    },
    "element_count": 121,
    "near_earth_objects": {
        "2025-11-04": [
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3763925?"
                },
                "id": "3763925",
                "neo_reference_id": "3763925",
                "name": "(2016 VH6)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3763925",
                "absolute_magnitude_h": 26.2,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0152951935,
                        "estimated_diameter_max": 0.0342010925
                    },
                    "meters": {
                        "estimated_diameter_min": 15.2951935344,
                        "estimated_diameter_max": 34.201092472
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0095039897,
                        "estimated_diameter_max": 0.021251567
                    },
                    "feet": {
                        "estimated_diameter_min": 50.1810827555,
                        "estimated_diameter_max": 112.2083122258
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-04",
                        "close_approach_date_full": "2025-Nov-04 21:02",
                        "epoch_date_close_approach": 1762290120000,
                        "relative_velocity": {
                            "kilometers_per_second": "13.0428095513",
                            "kilometers_per_hour": "46954.1143845562",
                            "miles_per_hour": "29175.460685226"
                        },
                        "miss_distance": {
                            "astronomical": "0.0798050678",
                            "lunar": "31.0441713742",
                            "kilometers": "11938668.158085586",
                            "miles": "7418344.4002336468"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "3",
                    "orbit_determination_date": "2021-04-15 18:12:17",
                    "first_observation_date": "2016-11-10",
                    "last_observation_date": "2016-11-19",
                    "data_arc_in_days": 9,
                    "observations_used": 18,
                    "orbit_uncertainty": "8",
                    "minimum_orbit_intersection": ".00692446",
                    "jupiter_tisserand_invariant": "5.291",
                    "epoch_osculation": "2457703.5",
                    "eccentricity": ".3496775823122142",
                    "semi_major_axis": "1.182801286505919",
                    "inclination": "3.391730991861849",
                    "ascending_node_longitude": "236.9802152858555",
                    "orbital_period": "469.8574411778803",
                    "perihelion_distance": ".7692021922847525",
                    "perihelion_argument": "78.48097939645332",
                    "aphelion_distance": "1.596400380727085",
                    "perihelion_time": "2457633.465244560459",
                    "mean_anomaly": "53.65991841063494",
                    "mean_motion": ".7661898449400313",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3782066?"
                },
                "id": "3782066",
                "neo_reference_id": "3782066",
                "name": "(2017 TH1)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3782066",
                "absolute_magnitude_h": 25.44,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0217047594,
                        "estimated_diameter_max": 0.0485333175
                    },
                    "meters": {
                        "estimated_diameter_min": 21.7047594307,
                        "estimated_diameter_max": 48.5333175224
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0134867081,
                        "estimated_diameter_max": 0.030157196
                    },
                    "feet": {
                        "estimated_diameter_min": 71.2098429307,
                        "estimated_diameter_max": 159.23004946
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-04",
                        "close_approach_date_full": "2025-Nov-04 00:38",
                        "epoch_date_close_approach": 1762216680000,
                        "relative_velocity": {
                            "kilometers_per_second": "10.7707178936",
                            "kilometers_per_hour": "38774.584416892",
                            "miles_per_hour": "24093.0188561516"
                        },
                        "miss_distance": {
                            "astronomical": "0.1290383918",
                            "lunar": "50.1959344102",
                            "kilometers": "19303868.561505466",
                            "miles": "11994867.7147127908"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "5",
                    "orbit_determination_date": "2023-12-28 05:21:46",
                    "first_observation_date": "2017-10-02",
                    "last_observation_date": "2021-11-01",
                    "data_arc_in_days": 1491,
                    "observations_used": 87,
                    "orbit_uncertainty": "0",
                    "minimum_orbit_intersection": ".0364239",
                    "jupiter_tisserand_invariant": "3.169",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".5910098901235277",
                    "semi_major_axis": "2.529271124979789",
                    "inclination": "8.724525429124181",
                    "ascending_node_longitude": "198.6194199888743",
                    "orbital_period": "1469.235813077704",
                    "perihelion_distance": "1.034446875312873",
                    "perihelion_argument": "182.4123027356838",
                    "aphelion_distance": "4.024095374646706",
                    "perihelion_time": "2460971.075331792958",
                    "mean_anomaly": "7.209789238900771",
                    "mean_motion": ".2450253368422082",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "AMO",
                        "orbit_class_description": "Near-Earth asteroid orbits similar to that of 1221 Amor",
                        "orbit_class_range": "1.017 AU < q (perihelion) < 1.3 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54216378?"
                },
                "id": "54216378",
                "neo_reference_id": "54216378",
                "name": "(2021 VE4)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54216378",
                "absolute_magnitude_h": 24.0,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0421264611,
                        "estimated_diameter_max": 0.0941976306
                    },
                    "meters": {
                        "estimated_diameter_min": 42.1264610556,
                        "estimated_diameter_max": 94.1976305719
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0261761612,
                        "estimated_diameter_max": 0.0585316759
                    },
                    "feet": {
                        "estimated_diameter_min": 138.2101784897,
                        "estimated_diameter_max": 309.0473542854
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-04",
                        "close_approach_date_full": "2025-Nov-04 00:09",
                        "epoch_date_close_approach": 1762214940000,
                        "relative_velocity": {
                            "kilometers_per_second": "11.8157533577",
                            "kilometers_per_hour": "42536.7120875915",
                            "miles_per_hour": "26430.6586857593"
                        },
                        "miss_distance": {
                            "astronomical": "0.2384287467",
                            "lunar": "92.7487824663",
                            "kilometers": "35668432.653089529",
                            "miles": "22163336.3230683402"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "4",
                    "orbit_determination_date": "2021-11-14 04:53:33",
                    "first_observation_date": "2021-10-28",
                    "last_observation_date": "2021-11-11",
                    "data_arc_in_days": 14,
                    "observations_used": 32,
                    "orbit_uncertainty": "8",
                    "minimum_orbit_intersection": ".107882",
                    "jupiter_tisserand_invariant": "5.136",
                    "epoch_osculation": "2459524.5",
                    "eccentricity": ".2650443233772576",
                    "semi_major_axis": "1.216422316849804",
                    "inclination": "22.94624973827813",
                    "ascending_node_longitude": "36.18290075716902",
                    "orbital_period": "490.032625713051",
                    "perihelion_distance": ".8940164869393514",
                    "perihelion_argument": "88.47632836578995",
                    "aphelion_distance": "1.538828146760256",
                    "perihelion_time": "2459599.001280297549",
                    "mean_anomaly": "305.2680097205958",
                    "mean_motion": ".7346449626209289",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54316551?"
                },
                "id": "54316551",
                "neo_reference_id": "54316551",
                "name": "(2022 TQ2)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54316551",
                "absolute_magnitude_h": 26.99,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0106305314,
                        "estimated_diameter_max": 0.023770591
                    },
                    "meters": {
                        "estimated_diameter_min": 10.6305314486,
                        "estimated_diameter_max": 23.7705909561
                    },
                    "miles": {
                        "estimated_diameter_min": 0.006605504,
                        "estimated_diameter_max": 0.0147703559
                    },
                    "feet": {
                        "estimated_diameter_min": 34.877072798,
                        "estimated_diameter_max": 77.9875056325
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-04",
                        "close_approach_date_full": "2025-Nov-04 17:11",
                        "epoch_date_close_approach": 1762276260000,
                        "relative_velocity": {
                            "kilometers_per_second": "24.5325561059",
                            "kilometers_per_hour": "88317.2019813804",
                            "miles_per_hour": "54876.8747533749"
                        },
                        "miss_distance": {
                            "astronomical": "0.4311335084",
                            "lunar": "167.7109347676",
                            "kilometers": "64496654.542267108",
                            "miles": "40076362.7669297704"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "3",
                    "orbit_determination_date": "2022-10-17 07:13:34",
                    "first_observation_date": "2022-10-14",
                    "last_observation_date": "2022-10-17",
                    "data_arc_in_days": 3,
                    "observations_used": 30,
                    "orbit_uncertainty": "6",
                    "minimum_orbit_intersection": ".00129027",
                    "jupiter_tisserand_invariant": "4.826",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".3896386989170141",
                    "semi_major_axis": "1.330343202336814",
                    "inclination": "10.86830436906675",
                    "ascending_node_longitude": "199.1939694180534",
                    "orbital_period": "560.4591568742709",
                    "perihelion_distance": ".8119900078652039",
                    "perihelion_argument": "110.0362530970546",
                    "aphelion_distance": "1.848696396808425",
                    "perihelion_time": "2460935.397117171087",
                    "mean_anomaly": "41.81756606336684",
                    "mean_motion": ".6423304813284719",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54402652?"
                },
                "id": "54402652",
                "neo_reference_id": "54402652",
                "name": "(2023 VM2)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54402652",
                "absolute_magnitude_h": 24.61,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0318093633,
                        "estimated_diameter_max": 0.0711278987
                    },
                    "meters": {
                        "estimated_diameter_min": 31.8093633221,
                        "estimated_diameter_max": 71.1278987093
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0197654159,
                        "estimated_diameter_max": 0.0441968135
                    },
                    "feet": {
                        "estimated_diameter_min": 104.3614315618,
                        "estimated_diameter_max": 233.3592552014
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-04",
                        "close_approach_date_full": "2025-Nov-04 09:00",
                        "epoch_date_close_approach": 1762246800000,
                        "relative_velocity": {
                            "kilometers_per_second": "15.0044836625",
                            "kilometers_per_hour": "54016.1411851271",
                            "miles_per_hour": "33563.5295047252"
                        },
                        "miss_distance": {
                            "astronomical": "0.2920422322",
                            "lunar": "113.6044283258",
                            "kilometers": "43688895.887165414",
                            "miles": "27147021.0801901532"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "4",
                    "orbit_determination_date": "2023-11-16 04:56:26",
                    "first_observation_date": "2023-10-23",
                    "last_observation_date": "2023-11-11",
                    "data_arc_in_days": 19,
                    "observations_used": 25,
                    "orbit_uncertainty": "7",
                    "minimum_orbit_intersection": ".10729",
                    "jupiter_tisserand_invariant": "4.320",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".3497218430532755",
                    "semi_major_axis": "1.566006677758822",
                    "inclination": "13.91678994031763",
                    "ascending_node_longitude": "218.6902277220207",
                    "orbital_period": "715.7952981909316",
                    "perihelion_distance": "1.01833993617927",
                    "perihelion_argument": "232.2400318504953",
                    "aphelion_distance": "2.113673419338374",
                    "perihelion_time": "2461014.709380048209",
                    "mean_anomaly": "352.8535758333652",
                    "mean_motion": ".5029370839817578",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "AMO",
                        "orbit_class_description": "Near-Earth asteroid orbits similar to that of 1221 Amor",
                        "orbit_class_range": "1.017 AU < q (perihelion) < 1.3 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54505729?"
                },
                "id": "54505729",
                "neo_reference_id": "54505729",
                "name": "(2024 XF11)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54505729",
                "absolute_magnitude_h": 25.03,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0262153087,
                        "estimated_diameter_max": 0.0586192124
                    },
                    "meters": {
                        "estimated_diameter_min": 26.2153087281,
                        "estimated_diameter_max": 58.6192123671
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0162894326,
                        "estimated_diameter_max": 0.0364242786
                    },
                    "feet": {
                        "estimated_diameter_min": 86.0082334874,
                        "estimated_diameter_max": 192.3202567026
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-04",
                        "close_approach_date_full": "2025-Nov-04 22:47",
                        "epoch_date_close_approach": 1762296420000,
                        "relative_velocity": {
                            "kilometers_per_second": "7.833549627",
                            "kilometers_per_hour": "28200.778657249",
                            "miles_per_hour": "17522.8671606667"
                        },
                        "miss_distance": {
                            "astronomical": "0.0825309243",
                            "lunar": "32.1045295527",
                            "kilometers": "12346450.484411241",
                            "miles": "7671728.5882314858"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "5",
                    "orbit_determination_date": "2025-11-14 05:39:03",
                    "first_observation_date": "2023-11-18",
                    "last_observation_date": "2025-11-11",
                    "data_arc_in_days": 724,
                    "observations_used": 36,
                    "orbit_uncertainty": "2",
                    "minimum_orbit_intersection": ".0252214",
                    "jupiter_tisserand_invariant": "5.996",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".1583270281381984",
                    "semi_major_axis": "1.015032880397644",
                    "inclination": "4.275856466432076",
                    "ascending_node_longitude": "238.8772183518916",
                    "orbital_period": "373.5240699165166",
                    "perihelion_distance": ".8543257409817293",
                    "perihelion_argument": "67.35048168484542",
                    "aphelion_distance": "1.175740019813558",
                    "perihelion_time": "2460908.180957245967",
                    "mean_anomaly": "88.9764758637377",
                    "mean_motion": ".9637933107776985",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54553387?"
                },
                "id": "54553387",
                "neo_reference_id": "54553387",
                "name": "(2025 TB12)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54553387",
                "absolute_magnitude_h": 26.32,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0144728805,
                        "estimated_diameter_max": 0.0323623447
                    },
                    "meters": {
                        "estimated_diameter_min": 14.4728805126,
                        "estimated_diameter_max": 32.3623446563
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0089930282,
                        "estimated_diameter_max": 0.0201090225
                    },
                    "feet": {
                        "estimated_diameter_min": 47.4832053008,
                        "estimated_diameter_max": 106.1756748422
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-04",
                        "close_approach_date_full": "2025-Nov-04 23:34",
                        "epoch_date_close_approach": 1762299240000,
                        "relative_velocity": {
                            "kilometers_per_second": "6.3067800485",
                            "kilometers_per_hour": "22704.4081747632",
                            "miles_per_hour": "14107.6362905911"
                        },
                        "miss_distance": {
                            "astronomical": "0.0188074079",
                            "lunar": "7.3160816731",
                            "kilometers": "2813548.162061173",
                            "miles": "1748257.7601152674"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "14",
                    "orbit_determination_date": "2025-11-07 04:49:31",
                    "first_observation_date": "2025-10-15",
                    "last_observation_date": "2025-11-06",
                    "data_arc_in_days": 22,
                    "observations_used": 74,
                    "orbit_uncertainty": "7",
                    "minimum_orbit_intersection": ".00203681",
                    "jupiter_tisserand_invariant": "4.767",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".3108417576507042",
                    "semi_major_axis": "1.372487981877843",
                    "inclination": "1.72496057058432",
                    "ascending_node_longitude": "223.188711022737",
                    "orbital_period": "587.3016923072254",
                    "perihelion_distance": ".9458614052364668",
                    "perihelion_argument": "220.0079164982609",
                    "aphelion_distance": "1.79911455851922",
                    "perihelion_time": "2461018.200314289155",
                    "mean_anomaly": "349.1501876674954",
                    "mean_motion": ".6129728633774806",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54554062?"
                },
                "id": "54554062",
                "neo_reference_id": "54554062",
                "name": "(2025 UM3)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54554062",
                "absolute_magnitude_h": 26.34,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0143401923,
                        "estimated_diameter_max": 0.0320656449
                    },
                    "meters": {
                        "estimated_diameter_min": 14.3401923465,
                        "estimated_diameter_max": 32.0656448971
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0089105797,
                        "estimated_diameter_max": 0.0199246618
                    },
                    "feet": {
                        "estimated_diameter_min": 47.0478766579,
                        "estimated_diameter_max": 105.2022504042
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-04",
                        "close_approach_date_full": "2025-Nov-04 13:25",
                        "epoch_date_close_approach": 1762262700000,
                        "relative_velocity": {
                            "kilometers_per_second": "3.6177990133",
                            "kilometers_per_hour": "13024.0764478967",
                            "miles_per_hour": "8092.6546128611"
                        },
                        "miss_distance": {
                            "astronomical": "0.0963356735",
                            "lunar": "37.4745769915",
                            "kilometers": "14411611.560615445",
                            "miles": "8954960.176745341"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "2",
                    "orbit_determination_date": "2025-10-26 07:16:42",
                    "first_observation_date": "2025-10-19",
                    "last_observation_date": "2025-10-26",
                    "data_arc_in_days": 7,
                    "observations_used": 20,
                    "orbit_uncertainty": "8",
                    "minimum_orbit_intersection": ".0941767",
                    "jupiter_tisserand_invariant": "4.092",
                    "epoch_osculation": "2460967.5",
                    "eccentricity": ".3710252219504495",
                    "semi_major_axis": "1.720221521192087",
                    "inclination": "2.040199025948159",
                    "ascending_node_longitude": "174.6862270490708",
                    "orbital_period": "824.0906598342254",
                    "perihelion_distance": "1.081975949487853",
                    "perihelion_argument": "229.5985806827433",
                    "aphelion_distance": "2.358467092896321",
                    "perihelion_time": "2460987.232029290826",
                    "mean_anomaly": "351.380158894015",
                    "mean_motion": ".4368451404028991",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "AMO",
                        "orbit_class_description": "Near-Earth asteroid orbits similar to that of 1221 Amor",
                        "orbit_class_range": "1.017 AU < q (perihelion) < 1.3 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54554911?"
                },
                "id": "54554911",
                "neo_reference_id": "54554911",
                "name": "(2025 UG8)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54554911",
                "absolute_magnitude_h": 23.96,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0429096504,
                        "estimated_diameter_max": 0.0959488953
                    },
                    "meters": {
                        "estimated_diameter_min": 42.9096504404,
                        "estimated_diameter_max": 95.9488952756
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0266628124,
                        "estimated_diameter_max": 0.059619861
                    },
                    "feet": {
                        "estimated_diameter_min": 140.779697551,
                        "estimated_diameter_max": 314.792973576
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-04",
                        "close_approach_date_full": "2025-Nov-04 16:42",
                        "epoch_date_close_approach": 1762274520000,
                        "relative_velocity": {
                            "kilometers_per_second": "11.2465309216",
                            "kilometers_per_hour": "40487.5113178079",
                            "miles_per_hour": "25157.3650185568"
                        },
                        "miss_distance": {
                            "astronomical": "0.0715568311",
                            "lunar": "27.8356072979",
                            "kilometers": "10704749.516509757",
                            "miles": "6651622.9097063666"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "3",
                    "orbit_determination_date": "2025-11-09 05:19:10",
                    "first_observation_date": "2025-10-27",
                    "last_observation_date": "2025-11-08",
                    "data_arc_in_days": 12,
                    "observations_used": 38,
                    "orbit_uncertainty": "8",
                    "minimum_orbit_intersection": ".0284044",
                    "jupiter_tisserand_invariant": "3.571",
                    "epoch_osculation": "2460976.5",
                    "eccentricity": ".5421254649730655",
                    "semi_major_axis": "2.069520818611853",
                    "inclination": "4.69759707153761",
                    "ascending_node_longitude": "213.493726107558",
                    "orbital_period": "1087.434547421659",
                    "perihelion_distance": ".947580882550463",
                    "perihelion_argument": "230.548061597715",
                    "aphelion_distance": "3.191460754673242",
                    "perihelion_time": "2461014.731075857815",
                    "mean_anomaly": "347.3434338264806",
                    "mean_motion": ".3310544076915444",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54555538?"
                },
                "id": "54555538",
                "neo_reference_id": "54555538",
                "name": "(2025 UR12)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54555538",
                "absolute_magnitude_h": 28.102,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.006370228,
                        "estimated_diameter_max": 0.0142442628
                    },
                    "meters": {
                        "estimated_diameter_min": 6.3702279992,
                        "estimated_diameter_max": 14.2442628383
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0039582749,
                        "estimated_diameter_max": 0.0088509718
                    },
                    "feet": {
                        "estimated_diameter_min": 20.8996988288,
                        "estimated_diameter_max": 46.7331472904
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-04",
                        "close_approach_date_full": "2025-Nov-04 01:25",
                        "epoch_date_close_approach": 1762219500000,
                        "relative_velocity": {
                            "kilometers_per_second": "6.1951949713",
                            "kilometers_per_hour": "22302.7018968059",
                            "miles_per_hour": "13858.0316313792"
                        },
                        "miss_distance": {
                            "astronomical": "0.0115170229",
                            "lunar": "4.4801219081",
                            "kilometers": "1722922.094581223",
                            "miles": "1070574.1463899574"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "3",
                    "orbit_determination_date": "2025-11-06 14:48:03",
                    "first_observation_date": "2025-10-30",
                    "last_observation_date": "2025-11-03",
                    "data_arc_in_days": 4,
                    "observations_used": 41,
                    "orbit_uncertainty": "6",
                    "minimum_orbit_intersection": ".00973685",
                    "jupiter_tisserand_invariant": "5.316",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".2017247357895939",
                    "semi_major_axis": "1.185111637543924",
                    "inclination": "8.283141859555279",
                    "ascending_node_longitude": "39.81847123323092",
                    "orbital_period": "471.2347632504289",
                    "perihelion_distance": ".9460453055792031",
                    "perihelion_argument": "49.3948729823673",
                    "aphelion_distance": "1.424177969508645",
                    "perihelion_time": "2461025.416007731033",
                    "mean_anomaly": "340.9654051808457",
                    "mean_motion": ".7639504299658061",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54561137?"
                },
                "id": "54561137",
                "neo_reference_id": "54561137",
                "name": "(2025 VC1)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54561137",
                "absolute_magnitude_h": 25.488,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0212302436,
                        "estimated_diameter_max": 0.0474722678
                    },
                    "meters": {
                        "estimated_diameter_min": 21.2302435624,
                        "estimated_diameter_max": 47.4722677845
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0131918577,
                        "estimated_diameter_max": 0.0294978905
                    },
                    "feet": {
                        "estimated_diameter_min": 69.6530322894,
                        "estimated_diameter_max": 155.7489150381
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-04",
                        "close_approach_date_full": "2025-Nov-04 21:47",
                        "epoch_date_close_approach": 1762292820000,
                        "relative_velocity": {
                            "kilometers_per_second": "15.6025926391",
                            "kilometers_per_hour": "56169.3335006639",
                            "miles_per_hour": "34901.4394743431"
                        },
                        "miss_distance": {
                            "astronomical": "0.0211709076",
                            "lunar": "8.2354830564",
                            "kilometers": "3167122.682926812",
                            "miles": "1967958.7797095256"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "2",
                    "orbit_determination_date": "2025-11-11 05:44:25",
                    "first_observation_date": "2025-11-09",
                    "last_observation_date": "2025-11-10",
                    "data_arc_in_days": 1,
                    "observations_used": 32,
                    "orbit_uncertainty": "8",
                    "minimum_orbit_intersection": ".0103728",
                    "jupiter_tisserand_invariant": "3.629",
                    "epoch_osculation": "2460989.5",
                    "eccentricity": ".5969425719702884",
                    "semi_major_axis": "1.967798427594904",
                    "inclination": "3.339257307461835",
                    "ascending_node_longitude": "51.12036807661346",
                    "orbital_period": "1008.252576951302",
                    "perihelion_distance": ".7931357731073124",
                    "perihelion_argument": "287.1515421826852",
                    "aphelion_distance": "3.142461082082495",
                    "perihelion_time": "2460942.387890155696",
                    "mean_anomaly": "16.82153850301403",
                    "mean_motion": ".3570533894280221",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54561142?"
                },
                "id": "54561142",
                "neo_reference_id": "54561142",
                "name": "(2025 VH1)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54561142",
                "absolute_magnitude_h": 24.294,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0367921339,
                        "estimated_diameter_max": 0.0822697123
                    },
                    "meters": {
                        "estimated_diameter_min": 36.7921338561,
                        "estimated_diameter_max": 82.2697123395
                    },
                    "miles": {
                        "estimated_diameter_min": 0.022861565,
                        "estimated_diameter_max": 0.0511200134
                    },
                    "feet": {
                        "estimated_diameter_min": 120.7091044404,
                        "estimated_diameter_max": 269.9137630319
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-04",
                        "close_approach_date_full": "2025-Nov-04 02:46",
                        "epoch_date_close_approach": 1762224360000,
                        "relative_velocity": {
                            "kilometers_per_second": "8.2736432844",
                            "kilometers_per_hour": "29785.1158237205",
                            "miles_per_hour": "18507.3126628001"
                        },
                        "miss_distance": {
                            "astronomical": "0.0559212341",
                            "lunar": "21.7533600649",
                            "kilometers": "8365697.509131367",
                            "miles": "5198203.3882801846"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "2",
                    "orbit_determination_date": "2025-11-14 05:39:13",
                    "first_observation_date": "2025-11-08",
                    "last_observation_date": "2025-11-13",
                    "data_arc_in_days": 5,
                    "observations_used": 41,
                    "orbit_uncertainty": "8",
                    "minimum_orbit_intersection": ".0280084",
                    "jupiter_tisserand_invariant": "4.266",
                    "epoch_osculation": "2460989.5",
                    "eccentricity": ".3803934277334373",
                    "semi_major_axis": "1.602908316804116",
                    "inclination": "6.604841410325656",
                    "ascending_node_longitude": "43.81523269815236",
                    "orbital_period": "741.2444425604023",
                    "perihelion_distance": ".9931725278325642",
                    "perihelion_argument": "328.0870668573223",
                    "aphelion_distance": "2.212644105775669",
                    "perihelion_time": "2460959.954200408388",
                    "mean_anomaly": "14.34950097735617",
                    "mean_motion": ".4856697458081305",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54561380?"
                },
                "id": "54561380",
                "neo_reference_id": "54561380",
                "name": "(2025 VD2)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54561380",
                "absolute_magnitude_h": 22.382,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0887472647,
                        "estimated_diameter_max": 0.1984449168
                    },
                    "meters": {
                        "estimated_diameter_min": 88.7472647335,
                        "estimated_diameter_max": 198.4449167614
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0551449766,
                        "estimated_diameter_max": 0.1233079164
                    },
                    "feet": {
                        "estimated_diameter_min": 291.1655760284,
                        "estimated_diameter_max": 651.0660207073
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-04",
                        "close_approach_date_full": "2025-Nov-04 17:58",
                        "epoch_date_close_approach": 1762279080000,
                        "relative_velocity": {
                            "kilometers_per_second": "24.3102349258",
                            "kilometers_per_hour": "87516.8457329405",
                            "miles_per_hour": "54379.5645055596"
                        },
                        "miss_distance": {
                            "astronomical": "0.0579602662",
                            "lunar": "22.5465435518",
                            "kilometers": "8670732.368152994",
                            "miles": "5387743.2605955572"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "3",
                    "orbit_determination_date": "2025-11-14 05:39:13",
                    "first_observation_date": "2025-11-10",
                    "last_observation_date": "2025-11-13",
                    "data_arc_in_days": 3,
                    "observations_used": 68,
                    "orbit_uncertainty": "8",
                    "minimum_orbit_intersection": ".0500474",
                    "jupiter_tisserand_invariant": "3.043",
                    "epoch_osculation": "2460990.5",
                    "eccentricity": ".7792118268992184",
                    "semi_major_axis": "2.365090901948162",
                    "inclination": "4.138245254944654",
                    "ascending_node_longitude": "349.1366571997991",
                    "orbital_period": "1328.526381832396",
                    "perihelion_distance": ".5221840994584145",
                    "perihelion_argument": "319.169317301422",
                    "aphelion_distance": "4.20799770443791",
                    "perihelion_time": "2460940.096485473628",
                    "mean_anomaly": "13.65818961341717",
                    "mean_motion": ".2709769297192751",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            }
        ],
        "2025-11-03": [
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3117427?"
                },
                "id": "3117427",
                "neo_reference_id": "3117427",
                "name": "(2002 EM7)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3117427",
                "absolute_magnitude_h": 24.4,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0350392641,
                        "estimated_diameter_max": 0.0783501764
                    },
                    "meters": {
                        "estimated_diameter_min": 35.0392641108,
                        "estimated_diameter_max": 78.3501764334
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0217723826,
                        "estimated_diameter_max": 0.0486845275
                    },
                    "feet": {
                        "estimated_diameter_min": 114.9582192654,
                        "estimated_diameter_max": 257.0543928497
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-03",
                        "close_approach_date_full": "2025-Nov-03 01:37",
                        "epoch_date_close_approach": 1762133820000,
                        "relative_velocity": {
                            "kilometers_per_second": "15.3883398652",
                            "kilometers_per_hour": "55398.0235147639",
                            "miles_per_hour": "34422.1774444932"
                        },
                        "miss_distance": {
                            "astronomical": "0.4056136419",
                            "lunar": "157.7837066991",
                            "kilometers": "60678936.871182753",
                            "miles": "37704143.0074098714"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "17",
                    "orbit_determination_date": "2021-04-14 21:19:55",
                    "first_observation_date": "2002-03-12",
                    "last_observation_date": "2002-04-06",
                    "data_arc_in_days": 25,
                    "observations_used": 69,
                    "orbit_uncertainty": "5",
                    "minimum_orbit_intersection": ".000667195",
                    "jupiter_tisserand_invariant": "6.434",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".3633715654431734",
                    "semi_major_axis": ".9209472456642119",
                    "inclination": "1.547602316254985",
                    "ascending_node_longitude": "345.9614194728579",
                    "orbital_period": "322.8126588445966",
                    "perihelion_distance": ".5863012033166284",
                    "perihelion_argument": "58.88908220093992",
                    "aphelion_distance": "1.255593288011795",
                    "perihelion_time": "2460984.449931625261",
                    "mean_anomaly": "17.89900258430545",
                    "mean_motion": "1.115197902363877",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "ATE",
                        "orbit_class_description": "Near-Earth asteroid orbits similar to that of 2062 Aten",
                        "orbit_class_range": "a (semi-major axis) < 1.0 AU; q (perihelion) > 0.983 AU"
                    }
                },
                "is_sentry_object": true,
                "sentry_data": "http://api.nasa.gov/neo/rest/v1/neo/sentry/3117427?"
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3274489?"
                },
                "id": "3274489",
                "neo_reference_id": "3274489",
                "name": "(2005 EZ223)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3274489",
                "absolute_magnitude_h": 23.29,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0584191154,
                        "estimated_diameter_max": 0.1306291133
                    },
                    "meters": {
                        "estimated_diameter_min": 58.4191154186,
                        "estimated_diameter_max": 130.6291132614
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0362999442,
                        "estimated_diameter_max": 0.0811691427
                    },
                    "feet": {
                        "estimated_diameter_min": 191.66377063,
                        "estimated_diameter_max": 428.5732199527
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-03",
                        "close_approach_date_full": "2025-Nov-03 09:32",
                        "epoch_date_close_approach": 1762162320000,
                        "relative_velocity": {
                            "kilometers_per_second": "12.8771960307",
                            "kilometers_per_hour": "46357.9057105078",
                            "miles_per_hour": "28804.9998010652"
                        },
                        "miss_distance": {
                            "astronomical": "0.0399612494",
                            "lunar": "15.5449260166",
                            "kilometers": "5978117.792778778",
                            "miles": "3714630.1467440164"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "21",
                    "orbit_determination_date": "2025-11-06 14:18:00",
                    "first_observation_date": "2005-03-14",
                    "last_observation_date": "2025-11-02",
                    "data_arc_in_days": 7538,
                    "observations_used": 130,
                    "orbit_uncertainty": "0",
                    "minimum_orbit_intersection": ".0217335",
                    "jupiter_tisserand_invariant": "3.943",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".5404436355997528",
                    "semi_major_axis": "1.752920008767539",
                    "inclination": "3.919504349150592",
                    "ascending_node_longitude": "5.130928495485097",
                    "orbital_period": "847.6988116942591",
                    "perihelion_distance": ".8055655463136596",
                    "perihelion_argument": "98.55305516930866",
                    "aphelion_distance": "2.700274471221418",
                    "perihelion_time": "2461026.117516263790",
                    "mean_anomaly": "349.1207752945506",
                    "mean_motion": ".4246791372521609",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54017094?"
                },
                "id": "54017094",
                "neo_reference_id": "54017094",
                "name": "(2020 KA1)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54017094",
                "absolute_magnitude_h": 26.7,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0121494041,
                        "estimated_diameter_max": 0.0271668934
                    },
                    "meters": {
                        "estimated_diameter_min": 12.14940408,
                        "estimated_diameter_max": 27.1668934089
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0075492874,
                        "estimated_diameter_max": 0.0168807197
                    },
                    "feet": {
                        "estimated_diameter_min": 39.8602508817,
                        "estimated_diameter_max": 89.1302305717
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-03",
                        "close_approach_date_full": "2025-Nov-03 00:53",
                        "epoch_date_close_approach": 1762131180000,
                        "relative_velocity": {
                            "kilometers_per_second": "10.7730306397",
                            "kilometers_per_hour": "38782.9103030107",
                            "miles_per_hour": "24098.1922380013"
                        },
                        "miss_distance": {
                            "astronomical": "0.2378474803",
                            "lunar": "92.5226698367",
                            "kilometers": "35581476.437746961",
                            "miles": "22109304.2363556218"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "4",
                    "orbit_determination_date": "2021-04-15 22:33:41",
                    "first_observation_date": "2020-05-16",
                    "last_observation_date": "2020-05-21",
                    "data_arc_in_days": 5,
                    "observations_used": 24,
                    "orbit_uncertainty": "6",
                    "minimum_orbit_intersection": ".0159675",
                    "jupiter_tisserand_invariant": "6.627",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".1677842196874977",
                    "semi_major_axis": ".8914373547523786",
                    "inclination": "14.66746775076402",
                    "ascending_node_longitude": "233.0321494083389",
                    "orbital_period": "307.4218063418848",
                    "perihelion_distance": ".7418682337849637",
                    "perihelion_argument": "199.944595333938",
                    "aphelion_distance": "1.041006475719793",
                    "perihelion_time": "2461002.744516196248",
                    "mean_anomaly": "357.371605351409",
                    "mean_motion": "1.171029486436765",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "ATE",
                        "orbit_class_description": "Near-Earth asteroid orbits similar to that of 2062 Aten",
                        "orbit_class_range": "a (semi-major axis) < 1.0 AU; q (perihelion) > 0.983 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54342586?"
                },
                "id": "54342586",
                "neo_reference_id": "54342586",
                "name": "(2023 EE)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54342586",
                "absolute_magnitude_h": 23.88,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0445199816,
                        "estimated_diameter_max": 0.0995497053
                    },
                    "meters": {
                        "estimated_diameter_min": 44.5199816448,
                        "estimated_diameter_max": 99.5497053148
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0276634255,
                        "estimated_diameter_max": 0.0618572999
                    },
                    "feet": {
                        "estimated_diameter_min": 146.0629365795,
                        "estimated_diameter_max": 326.6066551849
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-03",
                        "close_approach_date_full": "2025-Nov-03 16:25",
                        "epoch_date_close_approach": 1762187100000,
                        "relative_velocity": {
                            "kilometers_per_second": "15.6720885528",
                            "kilometers_per_hour": "56419.5187901999",
                            "miles_per_hour": "35056.8948838328"
                        },
                        "miss_distance": {
                            "astronomical": "0.1452050265",
                            "lunar": "56.4847553085",
                            "kilometers": "21722362.677693555",
                            "miles": "13497650.273558859"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "8",
                    "orbit_determination_date": "2023-09-13 06:48:54",
                    "first_observation_date": "2023-02-13",
                    "last_observation_date": "2023-03-20",
                    "data_arc_in_days": 35,
                    "observations_used": 47,
                    "orbit_uncertainty": "7",
                    "minimum_orbit_intersection": ".0125508",
                    "jupiter_tisserand_invariant": "3.581",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".5672402155534016",
                    "semi_major_axis": "2.040005008698793",
                    "inclination": "1.819423589255695",
                    "ascending_node_longitude": "79.25826220395257",
                    "orbital_period": "1064.253966447216",
                    "perihelion_distance": ".8828321278344706",
                    "perihelion_argument": "21.40365169690126",
                    "aphelion_distance": "3.197177889563116",
                    "perihelion_time": "2461021.504269314538",
                    "mean_anomaly": "352.8949882343627",
                    "mean_motion": ".3382651240678791",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54385807?"
                },
                "id": "54385807",
                "neo_reference_id": "54385807",
                "name": "(2023 SK3)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54385807",
                "absolute_magnitude_h": 25.87,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0178055329,
                        "estimated_diameter_max": 0.039814382
                    },
                    "meters": {
                        "estimated_diameter_min": 17.8055329183,
                        "estimated_diameter_max": 39.8143819809
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0110638418,
                        "estimated_diameter_max": 0.0247395023
                    },
                    "feet": {
                        "estimated_diameter_min": 58.4171046196,
                        "estimated_diameter_max": 130.6246169782
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-03",
                        "close_approach_date_full": "2025-Nov-03 03:01",
                        "epoch_date_close_approach": 1762138860000,
                        "relative_velocity": {
                            "kilometers_per_second": "7.7803801857",
                            "kilometers_per_hour": "28009.368668378",
                            "miles_per_hour": "17403.9324373041"
                        },
                        "miss_distance": {
                            "astronomical": "0.296219878",
                            "lunar": "115.229532542",
                            "kilometers": "44313862.80045986",
                            "miles": "27535357.512711668"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "1",
                    "orbit_determination_date": "2023-09-21 04:42:04",
                    "first_observation_date": "2023-09-19",
                    "last_observation_date": "2023-09-21",
                    "data_arc_in_days": 2,
                    "observations_used": 23,
                    "orbit_uncertainty": "7",
                    "minimum_orbit_intersection": ".0576453",
                    "jupiter_tisserand_invariant": "6.127",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".1928555863346464",
                    "semi_major_axis": ".9806307100965506",
                    "inclination": "15.40416323776181",
                    "ascending_node_longitude": "359.3184708435624",
                    "orbital_period": "354.6963027574092",
                    "perihelion_distance": ".7915105995231196",
                    "perihelion_argument": "230.5161593269138",
                    "aphelion_distance": "1.169750820669981",
                    "perihelion_time": "2461163.723480518714",
                    "mean_anomaly": "194.3358740140979",
                    "mean_motion": "1.014952784118018",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "ATE",
                        "orbit_class_description": "Near-Earth asteroid orbits similar to that of 2062 Aten",
                        "orbit_class_range": "a (semi-major axis) < 1.0 AU; q (perihelion) > 0.983 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54404099?"
                },
                "id": "54404099",
                "neo_reference_id": "54404099",
                "name": "(2023 VK6)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54404099",
                "absolute_magnitude_h": 26.91,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0110294785,
                        "estimated_diameter_max": 0.0246626636
                    },
                    "meters": {
                        "estimated_diameter_min": 11.0294784532,
                        "estimated_diameter_max": 24.6626635778
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0068533981,
                        "estimated_diameter_max": 0.0153246639
                    },
                    "feet": {
                        "estimated_diameter_min": 36.1859540885,
                        "estimated_diameter_max": 80.9142531725
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-03",
                        "close_approach_date_full": "2025-Nov-03 21:43",
                        "epoch_date_close_approach": 1762206180000,
                        "relative_velocity": {
                            "kilometers_per_second": "9.6040575338",
                            "kilometers_per_hour": "34574.6071217858",
                            "miles_per_hour": "21483.316297423"
                        },
                        "miss_distance": {
                            "astronomical": "0.0195521705",
                            "lunar": "7.6057943245",
                            "kilometers": "2924963.060676835",
                            "miles": "1817487.767876923"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "3",
                    "orbit_determination_date": "2023-11-13 06:02:21",
                    "first_observation_date": "2023-11-10",
                    "last_observation_date": "2023-11-13",
                    "data_arc_in_days": 3,
                    "observations_used": 34,
                    "orbit_uncertainty": "7",
                    "minimum_orbit_intersection": ".00393155",
                    "jupiter_tisserand_invariant": "4.277",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".4401840485593119",
                    "semi_major_axis": "1.583049024094193",
                    "inclination": ".8582032816424419",
                    "ascending_node_longitude": "104.719194234068",
                    "orbital_period": "727.5116854061163",
                    "perihelion_distance": ".8862160956005437",
                    "perihelion_argument": "249.4543192641861",
                    "aphelion_distance": "2.279881952587843",
                    "perihelion_time": "2460947.007892266052",
                    "mean_anomaly": "26.46989618245274",
                    "mean_motion": ".4948374125414061",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54496386?"
                },
                "id": "54496386",
                "neo_reference_id": "54496386",
                "name": "(2024 UY6)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54496386",
                "absolute_magnitude_h": 25.88,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0177237239,
                        "estimated_diameter_max": 0.0396314515
                    },
                    "meters": {
                        "estimated_diameter_min": 17.7237239257,
                        "estimated_diameter_max": 39.6314515123
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0110130081,
                        "estimated_diameter_max": 0.0246258347
                    },
                    "feet": {
                        "estimated_diameter_min": 58.1487024044,
                        "estimated_diameter_max": 130.0244513796
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-03",
                        "close_approach_date_full": "2025-Nov-03 23:07",
                        "epoch_date_close_approach": 1762211220000,
                        "relative_velocity": {
                            "kilometers_per_second": "20.7777632017",
                            "kilometers_per_hour": "74799.9475259447",
                            "miles_per_hour": "46477.7785057738"
                        },
                        "miss_distance": {
                            "astronomical": "0.3351540691",
                            "lunar": "130.3749328799",
                            "kilometers": "50138334.859192817",
                            "miles": "31154516.6273701946"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "3",
                    "orbit_determination_date": "2024-11-02 06:55:38",
                    "first_observation_date": "2024-10-27",
                    "last_observation_date": "2024-11-01",
                    "data_arc_in_days": 5,
                    "observations_used": 40,
                    "orbit_uncertainty": "8",
                    "minimum_orbit_intersection": ".0505313",
                    "jupiter_tisserand_invariant": "5.808",
                    "epoch_osculation": "2460612.5",
                    "eccentricity": ".2053143916932829",
                    "semi_major_axis": "1.037744573351291",
                    "inclination": "24.78857438351686",
                    "ascending_node_longitude": "216.3280078404655",
                    "orbital_period": "386.1305231109928",
                    "perihelion_distance": ".8246806775406653",
                    "perihelion_argument": "74.74657694174242",
                    "aphelion_distance": "1.250808469161917",
                    "perihelion_time": "2460525.291022357699",
                    "mean_anomaly": "81.30730432363107",
                    "mean_motion": ".9323272273311539",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54555539?"
                },
                "id": "54555539",
                "neo_reference_id": "54555539",
                "name": "(2025 UQ12)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54555539",
                "absolute_magnitude_h": 24.222,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.038032509,
                        "estimated_diameter_max": 0.0850432755
                    },
                    "meters": {
                        "estimated_diameter_min": 38.0325089909,
                        "estimated_diameter_max": 85.0432754585
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0236322981,
                        "estimated_diameter_max": 0.0528434251
                    },
                    "feet": {
                        "estimated_diameter_min": 124.7785767976,
                        "estimated_diameter_max": 279.0133798552
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-03",
                        "close_approach_date_full": "2025-Nov-03 17:24",
                        "epoch_date_close_approach": 1762190640000,
                        "relative_velocity": {
                            "kilometers_per_second": "12.5081994623",
                            "kilometers_per_hour": "45029.518064366",
                            "miles_per_hour": "27979.5913772723"
                        },
                        "miss_distance": {
                            "astronomical": "0.0890654613",
                            "lunar": "34.6464644457",
                            "kilometers": "13324003.301047431",
                            "miles": "8279151.7419033078"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "3",
                    "orbit_determination_date": "2025-11-11 05:44:21",
                    "first_observation_date": "2025-10-30",
                    "last_observation_date": "2025-11-10",
                    "data_arc_in_days": 11,
                    "observations_used": 36,
                    "orbit_uncertainty": "8",
                    "minimum_orbit_intersection": ".0730324",
                    "jupiter_tisserand_invariant": "3.615",
                    "epoch_osculation": "2460979.5",
                    "eccentricity": ".4711739516532162",
                    "semi_major_axis": "2.012097822560246",
                    "inclination": "20.22833350014897",
                    "ascending_node_longitude": "44.71989335937894",
                    "orbital_period": "1042.490397887049",
                    "perihelion_distance": "1.064049740391703",
                    "perihelion_argument": ".4806258998406845",
                    "aphelion_distance": "2.960145904728789",
                    "perihelion_time": "2460984.282967851784",
                    "mean_anomaly": "358.3483124351724",
                    "mean_motion": ".3453269216960259",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "AMO",
                        "orbit_class_description": "Near-Earth asteroid orbits similar to that of 1221 Amor",
                        "orbit_class_range": "1.017 AU < q (perihelion) < 1.3 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54555756?"
                },
                "id": "54555756",
                "neo_reference_id": "54555756",
                "name": "(2025 VB)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54555756",
                "absolute_magnitude_h": 25.209,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0241409845,
                        "estimated_diameter_max": 0.0539808823
                    },
                    "meters": {
                        "estimated_diameter_min": 24.1409844669,
                        "estimated_diameter_max": 53.9808823117
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0150005077,
                        "estimated_diameter_max": 0.0335421548
                    },
                    "feet": {
                        "estimated_diameter_min": 79.2027074783,
                        "estimated_diameter_max": 177.1026379234
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-03",
                        "close_approach_date_full": "2025-Nov-03 11:00",
                        "epoch_date_close_approach": 1762167600000,
                        "relative_velocity": {
                            "kilometers_per_second": "8.6169742194",
                            "kilometers_per_hour": "31021.1071899323",
                            "miles_per_hour": "19275.3096314332"
                        },
                        "miss_distance": {
                            "astronomical": "0.040736674",
                            "lunar": "15.846566186",
                            "kilometers": "6094119.66128438",
                            "miles": "3786710.365429244"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "5",
                    "orbit_determination_date": "2025-11-10 05:32:07",
                    "first_observation_date": "2025-10-31",
                    "last_observation_date": "2025-11-10",
                    "data_arc_in_days": 10,
                    "observations_used": 35,
                    "orbit_uncertainty": "7",
                    "minimum_orbit_intersection": ".0290225",
                    "jupiter_tisserand_invariant": "5.956",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".1679604074479923",
                    "semi_major_axis": "1.018271291520255",
                    "inclination": "14.10785378756458",
                    "ascending_node_longitude": "225.0497344637013",
                    "orbital_period": "375.3130594532214",
                    "perihelion_distance": ".8472420305039194",
                    "perihelion_argument": "77.25648601175347",
                    "aphelion_distance": "1.18930055253659",
                    "perihelion_time": "2460898.686693561758",
                    "mean_anomaly": "97.65924578048258",
                    "mean_motion": ".9591992362974783",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            }
        ],
        "2025-11-06": [
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/2138175?"
                },
                "id": "2138175",
                "neo_reference_id": "2138175",
                "name": "138175 (2000 EE104)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=2138175",
                "absolute_magnitude_h": 20.49,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.2121069879,
                        "estimated_diameter_max": 0.4742856434
                    },
                    "meters": {
                        "estimated_diameter_min": 212.1069878758,
                        "estimated_diameter_max": 474.2856433931
                    },
                    "miles": {
                        "estimated_diameter_min": 0.1317971312,
                        "estimated_diameter_max": 0.2947073445
                    },
                    "feet": {
                        "estimated_diameter_min": 695.8890901025,
                        "estimated_diameter_max": 1556.0553102697
                    }
                },
                "is_potentially_hazardous_asteroid": true,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-06",
                        "close_approach_date_full": "2025-Nov-06 14:44",
                        "epoch_date_close_approach": 1762440240000,
                        "relative_velocity": {
                            "kilometers_per_second": "6.3696685977",
                            "kilometers_per_hour": "22930.8069517814",
                            "miles_per_hour": "14248.3116862333"
                        },
                        "miss_distance": {
                            "astronomical": "0.1222242156",
                            "lunar": "47.5452198684",
                            "kilometers": "18284482.316180772",
                            "miles": "11361450.4738157736"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "291",
                    "orbit_determination_date": "2025-11-12 06:10:24",
                    "first_observation_date": "2000-03-11",
                    "last_observation_date": "2025-11-11",
                    "data_arc_in_days": 9376,
                    "observations_used": 1468,
                    "orbit_uncertainty": "0",
                    "minimum_orbit_intersection": ".00936359",
                    "jupiter_tisserand_invariant": "6.021",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".2932942668780022",
                    "semi_major_axis": "1.003596220771622",
                    "inclination": "5.234110756502385",
                    "ascending_node_longitude": "25.46832666521598",
                    "orbital_period": "367.2289853574723",
                    "perihelion_distance": ".7092472029588752",
                    "perihelion_argument": "280.8183443792498",
                    "aphelion_distance": "1.297945238584368",
                    "perihelion_time": "2460914.034581974159",
                    "mean_anomaly": "84.76332678097864",
                    "mean_motion": ".9803147745801291",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3311964?"
                },
                "id": "3311964",
                "neo_reference_id": "3311964",
                "name": "(2006 AM4)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3311964",
                "absolute_magnitude_h": 21.8,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.1160259082,
                        "estimated_diameter_max": 0.2594418179
                    },
                    "meters": {
                        "estimated_diameter_min": 116.0259082094,
                        "estimated_diameter_max": 259.4418179074
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0720951346,
                        "estimated_diameter_max": 0.1612096218
                    },
                    "feet": {
                        "estimated_diameter_min": 380.6624406898,
                        "estimated_diameter_max": 851.1870938635
                    }
                },
                "is_potentially_hazardous_asteroid": true,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-06",
                        "close_approach_date_full": "2025-Nov-06 09:35",
                        "epoch_date_close_approach": 1762421700000,
                        "relative_velocity": {
                            "kilometers_per_second": "29.3116057392",
                            "kilometers_per_hour": "105521.780660953",
                            "miles_per_hour": "65567.1308779127"
                        },
                        "miss_distance": {
                            "astronomical": "0.269029635",
                            "lunar": "104.652528015",
                            "kilometers": "40246260.36287745",
                            "miles": "25007866.55931081"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "50",
                    "orbit_determination_date": "2021-04-14 23:23:25",
                    "first_observation_date": "2006-01-08",
                    "last_observation_date": "2008-01-15",
                    "data_arc_in_days": 737,
                    "observations_used": 183,
                    "orbit_uncertainty": "1",
                    "minimum_orbit_intersection": ".0111032",
                    "jupiter_tisserand_invariant": "5.957",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".6492760187102378",
                    "semi_major_axis": ".9821839239093081",
                    "inclination": "4.155511968461414",
                    "ascending_node_longitude": "123.307765645656",
                    "orbital_period": "355.5393376778503",
                    "perihelion_distance": ".3444754561522734",
                    "perihelion_argument": "139.6816970853739",
                    "aphelion_distance": "1.619892391666343",
                    "perihelion_time": "2460939.374598895727",
                    "mean_anomaly": "61.8922916976259",
                    "mean_motion": "1.012546185047438",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "ATE",
                        "orbit_class_description": "Near-Earth asteroid orbits similar to that of 2062 Aten",
                        "orbit_class_range": "a (semi-major axis) < 1.0 AU; q (perihelion) > 0.983 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3401433?"
                },
                "id": "3401433",
                "neo_reference_id": "3401433",
                "name": "(2008 CT1)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3401433",
                "absolute_magnitude_h": 27.7,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0076657557,
                        "estimated_diameter_max": 0.0171411509
                    },
                    "meters": {
                        "estimated_diameter_min": 7.6657557353,
                        "estimated_diameter_max": 17.1411509231
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0047632783,
                        "estimated_diameter_max": 0.0106510141
                    },
                    "feet": {
                        "estimated_diameter_min": 25.1501180466,
                        "estimated_diameter_max": 56.2373735944
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-06",
                        "close_approach_date_full": "2025-Nov-06 02:00",
                        "epoch_date_close_approach": 1762394400000,
                        "relative_velocity": {
                            "kilometers_per_second": "27.4750410566",
                            "kilometers_per_hour": "98910.1478035858",
                            "miles_per_hour": "61458.9193394003"
                        },
                        "miss_distance": {
                            "astronomical": "0.4296590089",
                            "lunar": "167.1373544621",
                            "kilometers": "64276072.557751043",
                            "miles": "39939299.4774606734"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "7",
                    "orbit_determination_date": "2021-04-15 01:22:41",
                    "first_observation_date": "2008-02-03",
                    "last_observation_date": "2008-02-03",
                    "data_arc_in_days": null,
                    "observations_used": 13,
                    "orbit_uncertainty": "8",
                    "minimum_orbit_intersection": ".000254436",
                    "jupiter_tisserand_invariant": "6.578",
                    "epoch_osculation": "2454500.5",
                    "eccentricity": ".4564527680414478",
                    "semi_major_axis": ".890796287384098",
                    "inclination": ".3712304873481997",
                    "ascending_node_longitude": "138.0944449952256",
                    "orbital_period": "307.0902474524166",
                    "perihelion_distance": ".4841898562465814",
                    "perihelion_argument": "126.2211676109073",
                    "aphelion_distance": "1.297402718521615",
                    "perihelion_time": "2454568.455752451093",
                    "mean_anomaly": "280.3358912067562",
                    "mean_motion": "1.172293822374746",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "ATE",
                        "orbit_class_description": "Near-Earth asteroid orbits similar to that of 2062 Aten",
                        "orbit_class_range": "a (semi-major axis) < 1.0 AU; q (perihelion) > 0.983 AU"
                    }
                },
                "is_sentry_object": true,
                "sentry_data": "http://api.nasa.gov/neo/rest/v1/neo/sentry/3401433?"
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3558382?"
                },
                "id": "3558382",
                "neo_reference_id": "3558382",
                "name": "(2011 ED12)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3558382",
                "absolute_magnitude_h": 26.8,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0116025908,
                        "estimated_diameter_max": 0.0259441818
                    },
                    "meters": {
                        "estimated_diameter_min": 11.6025908209,
                        "estimated_diameter_max": 25.9441817907
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0072095135,
                        "estimated_diameter_max": 0.0161209622
                    },
                    "feet": {
                        "estimated_diameter_min": 38.066244069,
                        "estimated_diameter_max": 85.1187093863
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-06",
                        "close_approach_date_full": "2025-Nov-06 12:10",
                        "epoch_date_close_approach": 1762431000000,
                        "relative_velocity": {
                            "kilometers_per_second": "6.2679225824",
                            "kilometers_per_hour": "22564.5212966516",
                            "miles_per_hour": "14020.7160245777"
                        },
                        "miss_distance": {
                            "astronomical": "0.1196479919",
                            "lunar": "46.5430688491",
                            "kilometers": "17899084.738017253",
                            "miles": "11121975.5233459714"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "17",
                    "orbit_determination_date": "2021-04-15 04:52:45",
                    "first_observation_date": "2011-03-05",
                    "last_observation_date": "2011-03-25",
                    "data_arc_in_days": 20,
                    "observations_used": 86,
                    "orbit_uncertainty": "6",
                    "minimum_orbit_intersection": ".00960381",
                    "jupiter_tisserand_invariant": "5.649",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".1340695982416146",
                    "semi_major_axis": "1.097854807899578",
                    "inclination": "2.815330141867173",
                    "ascending_node_longitude": "349.8974963919069",
                    "orbital_period": "420.1610493846688",
                    "perihelion_distance": ".9506658548768565",
                    "perihelion_argument": "117.8767947982766",
                    "aphelion_distance": "1.245043760922299",
                    "perihelion_time": "2461038.702537945914",
                    "mean_anomaly": "327.2675187748354",
                    "mean_motion": ".8568143109106009",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3703013?"
                },
                "id": "3703013",
                "neo_reference_id": "3703013",
                "name": "(2014 YW14)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3703013",
                "absolute_magnitude_h": 27.6,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0080270317,
                        "estimated_diameter_max": 0.0179489885
                    },
                    "meters": {
                        "estimated_diameter_min": 8.0270316728,
                        "estimated_diameter_max": 17.948988478
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0049877647,
                        "estimated_diameter_max": 0.0111529809
                    },
                    "feet": {
                        "estimated_diameter_min": 26.3354065935,
                        "estimated_diameter_max": 58.8877593581
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-06",
                        "close_approach_date_full": "2025-Nov-06 03:24",
                        "epoch_date_close_approach": 1762399440000,
                        "relative_velocity": {
                            "kilometers_per_second": "8.4953124555",
                            "kilometers_per_hour": "30583.1248397834",
                            "miles_per_hour": "19003.1644316976"
                        },
                        "miss_distance": {
                            "astronomical": "0.0984130003",
                            "lunar": "38.2826571167",
                            "kilometers": "14722375.225189361",
                            "miles": "9148059.7637647418"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "5",
                    "orbit_determination_date": "2021-04-15 12:12:13",
                    "first_observation_date": "2014-12-27",
                    "last_observation_date": "2014-12-28",
                    "data_arc_in_days": 1,
                    "observations_used": 38,
                    "orbit_uncertainty": "6",
                    "minimum_orbit_intersection": ".00281003",
                    "jupiter_tisserand_invariant": "7.384",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".3409700834439564",
                    "semi_major_axis": ".7811734144875624",
                    "inclination": "6.891543894122361",
                    "ascending_node_longitude": "275.356680145743",
                    "orbital_period": "252.185207699146",
                    "perihelion_distance": ".5148166501655379",
                    "perihelion_argument": "332.528073691818",
                    "aphelion_distance": "1.047530178809587",
                    "perihelion_time": "2460892.940274878784",
                    "mean_anomaly": "153.5439028994594",
                    "mean_motion": "1.42752226938495",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "ATE",
                        "orbit_class_description": "Near-Earth asteroid orbits similar to that of 2062 Aten",
                        "orbit_class_range": "a (semi-major axis) < 1.0 AU; q (perihelion) > 0.983 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3789479?"
                },
                "id": "3789479",
                "neo_reference_id": "3789479",
                "name": "(2017 WQ1)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3789479",
                "absolute_magnitude_h": 24.98,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0268259417,
                        "estimated_diameter_max": 0.0599846292
                    },
                    "meters": {
                        "estimated_diameter_min": 26.8259417119,
                        "estimated_diameter_max": 59.9846292283
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0166688622,
                        "estimated_diameter_max": 0.037272709
                    },
                    "feet": {
                        "estimated_diameter_min": 88.0116226061,
                        "estimated_diameter_max": 196.7999709574
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-06",
                        "close_approach_date_full": "2025-Nov-06 11:36",
                        "epoch_date_close_approach": 1762428960000,
                        "relative_velocity": {
                            "kilometers_per_second": "21.5635603071",
                            "kilometers_per_hour": "77628.8171054322",
                            "miles_per_hour": "48235.5280508726"
                        },
                        "miss_distance": {
                            "astronomical": "0.3827649888",
                            "lunar": "148.8955806432",
                            "kilometers": "57260827.035053856",
                            "miles": "35580228.0424849728"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "5",
                    "orbit_determination_date": "2022-08-14 05:49:23",
                    "first_observation_date": "2017-11-16",
                    "last_observation_date": "2017-11-27",
                    "data_arc_in_days": 11,
                    "observations_used": 37,
                    "orbit_uncertainty": "7",
                    "minimum_orbit_intersection": ".00807235",
                    "jupiter_tisserand_invariant": "7.129",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".3462162905886779",
                    "semi_major_axis": ".8144147642036363",
                    "inclination": "4.300628841991871",
                    "ascending_node_longitude": "222.308464878724",
                    "orbital_period": "268.4521485615508",
                    "perihelion_distance": ".5324511055404006",
                    "perihelion_argument": "30.08827653859633",
                    "aphelion_distance": "1.096378422866872",
                    "perihelion_time": "2460916.997199430744",
                    "mean_anomaly": "111.9790188531116",
                    "mean_motion": "1.341021116534141",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "ATE",
                        "orbit_class_description": "Near-Earth asteroid orbits similar to that of 2062 Aten",
                        "orbit_class_range": "a (semi-major axis) < 1.0 AU; q (perihelion) > 0.983 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3892708?"
                },
                "id": "3892708",
                "neo_reference_id": "3892708",
                "name": "(2019 VZ3)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3892708",
                "absolute_magnitude_h": 25.05,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0259749653,
                        "estimated_diameter_max": 0.0580817882
                    },
                    "meters": {
                        "estimated_diameter_min": 25.974965333,
                        "estimated_diameter_max": 58.0817881978
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0161400902,
                        "estimated_diameter_max": 0.0360903388
                    },
                    "feet": {
                        "estimated_diameter_min": 85.2197052631,
                        "estimated_diameter_max": 190.5570539909
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-06",
                        "close_approach_date_full": "2025-Nov-06 09:56",
                        "epoch_date_close_approach": 1762422960000,
                        "relative_velocity": {
                            "kilometers_per_second": "16.4682638359",
                            "kilometers_per_hour": "59285.7498092418",
                            "miles_per_hour": "36837.8593745258"
                        },
                        "miss_distance": {
                            "astronomical": "0.4427887817",
                            "lunar": "172.2448360813",
                            "kilometers": "66240258.602214979",
                            "miles": "41159788.0906815502"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "5",
                    "orbit_determination_date": "2023-10-19 07:41:39",
                    "first_observation_date": "2019-11-05",
                    "last_observation_date": "2019-11-23",
                    "data_arc_in_days": 18,
                    "observations_used": 27,
                    "orbit_uncertainty": "8",
                    "minimum_orbit_intersection": ".107012",
                    "jupiter_tisserand_invariant": "4.867",
                    "epoch_osculation": "2458793.5",
                    "eccentricity": ".1731031313551376",
                    "semi_major_axis": "1.32074613338924",
                    "inclination": "20.8212759613859",
                    "ascending_node_longitude": "223.2998262572276",
                    "orbital_period": "554.4053962086203",
                    "perihelion_distance": "1.092120841974372",
                    "perihelion_argument": "162.3724552939422",
                    "aphelion_distance": "1.549371424804107",
                    "perihelion_time": "2458774.205848522925",
                    "mean_anomaly": "12.52854784467735",
                    "mean_motion": ".6493443290089002",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "AMO",
                        "orbit_class_description": "Near-Earth asteroid orbits similar to that of 1221 Amor",
                        "orbit_class_range": "1.017 AU < q (perihelion) < 1.3 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54220001?"
                },
                "id": "54220001",
                "neo_reference_id": "54220001",
                "name": "(2021 VU12)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54220001",
                "absolute_magnitude_h": 24.27,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.037201031,
                        "estimated_diameter_max": 0.0831840342
                    },
                    "meters": {
                        "estimated_diameter_min": 37.201031034,
                        "estimated_diameter_max": 83.1840342251
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0231156419,
                        "estimated_diameter_max": 0.0516881465
                    },
                    "feet": {
                        "estimated_diameter_min": 122.0506306575,
                        "estimated_diameter_max": 272.9135068469
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-06",
                        "close_approach_date_full": "2025-Nov-06 12:02",
                        "epoch_date_close_approach": 1762430520000,
                        "relative_velocity": {
                            "kilometers_per_second": "9.1537017201",
                            "kilometers_per_hour": "32953.3261923006",
                            "miles_per_hour": "20475.9153776548"
                        },
                        "miss_distance": {
                            "astronomical": "0.1243125147",
                            "lunar": "48.3575682183",
                            "kilometers": "18596887.413463689",
                            "miles": "11555569.9998253482"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "13",
                    "orbit_determination_date": "2025-10-25 09:25:08",
                    "first_observation_date": "2021-11-12",
                    "last_observation_date": "2025-10-24",
                    "data_arc_in_days": 1442,
                    "observations_used": 60,
                    "orbit_uncertainty": "1",
                    "minimum_orbit_intersection": ".0681226",
                    "jupiter_tisserand_invariant": "6.007",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".1479789385725354",
                    "semi_major_axis": "1.004926623924041",
                    "inclination": "17.5482200222812",
                    "ascending_node_longitude": "224.5778246012858",
                    "orbital_period": "367.9594451797632",
                    "perihelion_distance": ".8562186487724801",
                    "perihelion_argument": "301.5958084983209",
                    "aphelion_distance": "1.153634599075602",
                    "perihelion_time": "2461101.066167290335",
                    "mean_anomaly": "261.6092107464904",
                    "mean_motion": ".9783686890388837",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54321095?"
                },
                "id": "54321095",
                "neo_reference_id": "54321095",
                "name": "(2022 UA13)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54321095",
                "absolute_magnitude_h": 26.37,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0141434375,
                        "estimated_diameter_max": 0.0316256878
                    },
                    "meters": {
                        "estimated_diameter_min": 14.1434375313,
                        "estimated_diameter_max": 31.6256877555
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0087883219,
                        "estimated_diameter_max": 0.0196512852
                    },
                    "feet": {
                        "estimated_diameter_min": 46.4023555902,
                        "estimated_diameter_max": 103.7588214159
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-06",
                        "close_approach_date_full": "2025-Nov-06 21:04",
                        "epoch_date_close_approach": 1762463040000,
                        "relative_velocity": {
                            "kilometers_per_second": "29.8016146204",
                            "kilometers_per_hour": "107285.8126333064",
                            "miles_per_hour": "66663.2317442898"
                        },
                        "miss_distance": {
                            "astronomical": "0.4174473054",
                            "lunar": "162.3870018006",
                            "kilometers": "62449227.725079498",
                            "miles": "38804150.7359851524"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "5",
                    "orbit_determination_date": "2023-11-26 05:21:25",
                    "first_observation_date": "2022-10-26",
                    "last_observation_date": "2022-10-31",
                    "data_arc_in_days": 5,
                    "observations_used": 139,
                    "orbit_uncertainty": "6",
                    "minimum_orbit_intersection": ".000136872",
                    "jupiter_tisserand_invariant": "7.788",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".5854172170009513",
                    "semi_major_axis": ".7237298906861421",
                    "inclination": "8.247720691940048",
                    "ascending_node_longitude": "213.1266463969542",
                    "orbital_period": "224.8863995886974",
                    "perihelion_distance": ".3000459522202581",
                    "perihelion_argument": "26.97839097379777",
                    "aphelion_distance": "1.147413829152026",
                    "perihelion_time": "2460938.646771893205",
                    "mean_anomaly": "99.0151568043748",
                    "mean_motion": "1.600808233216489",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "ATE",
                        "orbit_class_description": "Near-Earth asteroid orbits similar to that of 2062 Aten",
                        "orbit_class_range": "a (semi-major axis) < 1.0 AU; q (perihelion) > 0.983 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54357276?"
                },
                "id": "54357276",
                "neo_reference_id": "54357276",
                "name": "(2023 HP7)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54357276",
                "absolute_magnitude_h": 25.57,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0204434871,
                        "estimated_diameter_max": 0.0457130269
                    },
                    "meters": {
                        "estimated_diameter_min": 20.4434871028,
                        "estimated_diameter_max": 45.713026859
                    },
                    "miles": {
                        "estimated_diameter_min": 0.01270299,
                        "estimated_diameter_max": 0.0284047492
                    },
                    "feet": {
                        "estimated_diameter_min": 67.0718102264,
                        "estimated_diameter_max": 149.9771270402
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-06",
                        "close_approach_date_full": "2025-Nov-06 07:28",
                        "epoch_date_close_approach": 1762414080000,
                        "relative_velocity": {
                            "kilometers_per_second": "24.0106183625",
                            "kilometers_per_hour": "86438.2261050068",
                            "miles_per_hour": "53709.3522150805"
                        },
                        "miss_distance": {
                            "astronomical": "0.4902675298",
                            "lunar": "190.7140690922",
                            "kilometers": "73342978.188241526",
                            "miles": "45573213.3881880188"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "7",
                    "orbit_determination_date": "2023-05-13 06:32:56",
                    "first_observation_date": "2023-04-30",
                    "last_observation_date": "2023-05-12",
                    "data_arc_in_days": 12,
                    "observations_used": 47,
                    "orbit_uncertainty": "7",
                    "minimum_orbit_intersection": ".0140516",
                    "jupiter_tisserand_invariant": "5.057",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".3500433876682584",
                    "semi_major_axis": "1.257778199281681",
                    "inclination": "2.763846916357508",
                    "ascending_node_longitude": "52.67590210363282",
                    "orbital_period": "515.2340084893573",
                    "perihelion_distance": ".8175012574698394",
                    "perihelion_argument": "88.7290339142765",
                    "aphelion_distance": "1.698055141093522",
                    "perihelion_time": "2461036.314483624352",
                    "mean_anomaly": "334.9760033454136",
                    "mean_motion": ".6987116418333946",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54377574?"
                },
                "id": "54377574",
                "neo_reference_id": "54377574",
                "name": "(2023 QB2)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54377574",
                "absolute_magnitude_h": 26.25,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0149470324,
                        "estimated_diameter_max": 0.0334225806
                    },
                    "meters": {
                        "estimated_diameter_min": 14.9470324236,
                        "estimated_diameter_max": 33.422580561
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0092876525,
                        "estimated_diameter_max": 0.0207678223
                    },
                    "feet": {
                        "estimated_diameter_min": 49.0388218565,
                        "estimated_diameter_max": 109.6541392077
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-06",
                        "close_approach_date_full": "2025-Nov-06 15:48",
                        "epoch_date_close_approach": 1762444080000,
                        "relative_velocity": {
                            "kilometers_per_second": "5.3733178874",
                            "kilometers_per_hour": "19343.9443946753",
                            "miles_per_hour": "12019.574782347"
                        },
                        "miss_distance": {
                            "astronomical": "0.2118021567",
                            "lunar": "82.3910389563",
                            "kilometers": "31685151.503726229",
                            "miles": "19688240.1885868002"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "6",
                    "orbit_determination_date": "2023-09-03 05:49:49",
                    "first_observation_date": "2023-08-19",
                    "last_observation_date": "2023-09-03",
                    "data_arc_in_days": 15,
                    "observations_used": 36,
                    "orbit_uncertainty": "6",
                    "minimum_orbit_intersection": ".019977",
                    "jupiter_tisserand_invariant": "5.994",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".2088618888179484",
                    "semi_major_axis": "1.012194664668661",
                    "inclination": "8.645741226874833",
                    "ascending_node_longitude": "332.0680863872923",
                    "orbital_period": "371.9585041925691",
                    "perihelion_distance": ".8007857751545144",
                    "perihelion_argument": "110.6892713327391",
                    "aphelion_distance": "1.223603554182807",
                    "perihelion_time": "2461015.718569656320",
                    "mean_anomaly": "345.270708924459",
                    "mean_motion": ".9678498970778258",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54554918?"
                },
                "id": "54554918",
                "neo_reference_id": "54554918",
                "name": "(2025 UO8)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54554918",
                "absolute_magnitude_h": 25.13,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0250354255,
                        "estimated_diameter_max": 0.0559809132
                    },
                    "meters": {
                        "estimated_diameter_min": 25.0354254756,
                        "estimated_diameter_max": 55.980913209
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0155562874,
                        "estimated_diameter_max": 0.034784916
                    },
                    "feet": {
                        "estimated_diameter_min": 82.1372253173,
                        "estimated_diameter_max": 183.6644192927
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-06",
                        "close_approach_date_full": "2025-Nov-06 17:16",
                        "epoch_date_close_approach": 1762449360000,
                        "relative_velocity": {
                            "kilometers_per_second": "7.1896064564",
                            "kilometers_per_hour": "25882.5832428706",
                            "miles_per_hour": "16082.4306822159"
                        },
                        "miss_distance": {
                            "astronomical": "0.0457738267",
                            "lunar": "17.8060185863",
                            "kilometers": "6847666.976069129",
                            "miles": "4254942.9546028202"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "3",
                    "orbit_determination_date": "2025-11-06 14:47:59",
                    "first_observation_date": "2025-10-27",
                    "last_observation_date": "2025-11-03",
                    "data_arc_in_days": 7,
                    "observations_used": 27,
                    "orbit_uncertainty": "7",
                    "minimum_orbit_intersection": ".0391002",
                    "jupiter_tisserand_invariant": "6.542",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".1576444620674631",
                    "semi_major_axis": ".9070397821328215",
                    "inclination": "12.29012416203651",
                    "ascending_node_longitude": "38.38601163839492",
                    "orbital_period": "315.5280183251648",
                    "perihelion_distance": ".764049983604704",
                    "perihelion_argument": "156.2588320769363",
                    "aphelion_distance": "1.050029580660939",
                    "perihelion_time": "2461107.960233752162",
                    "mean_anomaly": "237.3938227225484",
                    "mean_motion": "1.140944635949905",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "ATE",
                        "orbit_class_description": "Near-Earth asteroid orbits similar to that of 2062 Aten",
                        "orbit_class_range": "a (semi-major axis) < 1.0 AU; q (perihelion) > 0.983 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54555313?"
                },
                "id": "54555313",
                "neo_reference_id": "54555313",
                "name": "(2025 UP11)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54555313",
                "absolute_magnitude_h": 28.305,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0058016961,
                        "estimated_diameter_max": 0.0129729869
                    },
                    "meters": {
                        "estimated_diameter_min": 5.8016961057,
                        "estimated_diameter_max": 12.9729868771
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0036050057,
                        "estimated_diameter_max": 0.0080610378
                    },
                    "feet": {
                        "estimated_diameter_min": 19.0344366514,
                        "estimated_diameter_max": 42.5622942658
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-06",
                        "close_approach_date_full": "2025-Nov-06 13:35",
                        "epoch_date_close_approach": 1762436100000,
                        "relative_velocity": {
                            "kilometers_per_second": "5.0922892861",
                            "kilometers_per_hour": "18332.2414300442",
                            "miles_per_hour": "11390.9419041294"
                        },
                        "miss_distance": {
                            "astronomical": "0.0167588068",
                            "lunar": "6.5191758452",
                            "kilometers": "2507081.801021516",
                            "miles": "1557828.3936922808"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "2",
                    "orbit_determination_date": "2025-11-02 05:20:32",
                    "first_observation_date": "2025-10-30",
                    "last_observation_date": "2025-11-02",
                    "data_arc_in_days": 3,
                    "observations_used": 26,
                    "orbit_uncertainty": "7",
                    "minimum_orbit_intersection": ".0150447",
                    "jupiter_tisserand_invariant": "4.936",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".2504367119171583",
                    "semi_major_axis": "1.311236542134479",
                    "inclination": "5.679052073804598",
                    "ascending_node_longitude": "40.56496007127996",
                    "orbital_period": "548.4284710834066",
                    "perihelion_distance": ".9828547739766961",
                    "perihelion_argument": "31.03805753780833",
                    "aphelion_distance": "1.639618310292263",
                    "perihelion_time": "2461010.439560663004",
                    "mean_anomaly": "353.4754630232587",
                    "mean_motion": ".6564210630582856",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54561385?"
                },
                "id": "54561385",
                "neo_reference_id": "54561385",
                "name": "(2025 VH2)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54561385",
                "absolute_magnitude_h": 27.112,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0100497435,
                        "estimated_diameter_max": 0.0224719096
                    },
                    "meters": {
                        "estimated_diameter_min": 10.049743482,
                        "estimated_diameter_max": 22.4719095823
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0062446192,
                        "estimated_diameter_max": 0.0139633929
                    },
                    "feet": {
                        "estimated_diameter_min": 32.9716004056,
                        "estimated_diameter_max": 73.7267398339
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-06",
                        "close_approach_date_full": "2025-Nov-06 19:37",
                        "epoch_date_close_approach": 1762457820000,
                        "relative_velocity": {
                            "kilometers_per_second": "7.8945557105",
                            "kilometers_per_hour": "28420.400557852",
                            "miles_per_hour": "17659.3316688498"
                        },
                        "miss_distance": {
                            "astronomical": "0.0182920879",
                            "lunar": "7.1156221931",
                            "kilometers": "2736457.387692773",
                            "miles": "1700355.7741673474"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "3",
                    "orbit_determination_date": "2025-11-13 05:20:59",
                    "first_observation_date": "2025-11-10",
                    "last_observation_date": "2025-11-12",
                    "data_arc_in_days": 2,
                    "observations_used": 28,
                    "orbit_uncertainty": "7",
                    "minimum_orbit_intersection": ".0129435",
                    "jupiter_tisserand_invariant": "4.461",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".3724177684436759",
                    "semi_major_axis": "1.501816760130723",
                    "inclination": "2.355562381773274",
                    "ascending_node_longitude": "239.9024171303171",
                    "orbital_period": "672.2392204695252",
                    "perihelion_distance": ".942513513711528",
                    "perihelion_argument": "125.8277566484632",
                    "aphelion_distance": "2.061120006549918",
                    "perihelion_time": "2460955.063259869130",
                    "mean_anomaly": "24.33244885011097",
                    "mean_motion": ".5355236484841782",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            }
        ],
        "2025-11-05": [
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3709286?"
                },
                "id": "3709286",
                "neo_reference_id": "3709286",
                "name": "(2002 LX64)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3709286",
                "absolute_magnitude_h": 21.2,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.1529519353,
                        "estimated_diameter_max": 0.3420109247
                    },
                    "meters": {
                        "estimated_diameter_min": 152.9519353442,
                        "estimated_diameter_max": 342.0109247198
                    },
                    "miles": {
                        "estimated_diameter_min": 0.095039897,
                        "estimated_diameter_max": 0.2125156703
                    },
                    "feet": {
                        "estimated_diameter_min": 501.8108275547,
                        "estimated_diameter_max": 1122.0831222578
                    }
                },
                "is_potentially_hazardous_asteroid": true,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-05",
                        "close_approach_date_full": "2025-Nov-05 06:07",
                        "epoch_date_close_approach": 1762322820000,
                        "relative_velocity": {
                            "kilometers_per_second": "27.920674683",
                            "kilometers_per_hour": "100514.4288588572",
                            "miles_per_hour": "62455.7571984383"
                        },
                        "miss_distance": {
                            "astronomical": "0.3518495506",
                            "lunar": "136.8694751834",
                            "kilometers": "52635943.330217222",
                            "miles": "32706458.5667607836"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "7",
                    "orbit_determination_date": "2021-06-15 06:33:04",
                    "first_observation_date": "2002-06-13",
                    "last_observation_date": "2021-06-14",
                    "data_arc_in_days": 6941,
                    "observations_used": 106,
                    "orbit_uncertainty": "0",
                    "minimum_orbit_intersection": ".0414209",
                    "jupiter_tisserand_invariant": "4.670",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".5707272158025364",
                    "semi_major_axis": "1.357086441060538",
                    "inclination": "4.846384430829882",
                    "ascending_node_longitude": "285.5037368430181",
                    "orbital_period": "577.4437617809572",
                    "perihelion_distance": ".5825602749506844",
                    "perihelion_argument": "230.9839533868496",
                    "aphelion_distance": "2.131612607170392",
                    "perihelion_time": "2461033.314055255559",
                    "mean_anomaly": "339.5424928384935",
                    "mean_motion": ".623437335074302",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3309832?"
                },
                "id": "3309832",
                "neo_reference_id": "3309832",
                "name": "(2005 YO128)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3309832",
                "absolute_magnitude_h": 24.6,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0319561887,
                        "estimated_diameter_max": 0.0714562102
                    },
                    "meters": {
                        "estimated_diameter_min": 31.9561886721,
                        "estimated_diameter_max": 71.4562101727
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0198566489,
                        "estimated_diameter_max": 0.0444008168
                    },
                    "feet": {
                        "estimated_diameter_min": 104.8431420431,
                        "estimated_diameter_max": 234.436392583
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-05",
                        "close_approach_date_full": "2025-Nov-05 16:28",
                        "epoch_date_close_approach": 1762360080000,
                        "relative_velocity": {
                            "kilometers_per_second": "13.8516754215",
                            "kilometers_per_hour": "49866.0315173755",
                            "miles_per_hour": "30984.8127503381"
                        },
                        "miss_distance": {
                            "astronomical": "0.3227675292",
                            "lunar": "125.5565688588",
                            "kilometers": "48285334.873482804",
                            "miles": "30003115.8274145352"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "11",
                    "orbit_determination_date": "2021-04-14 23:20:28",
                    "first_observation_date": "2005-12-30",
                    "last_observation_date": "2006-01-04",
                    "data_arc_in_days": 5,
                    "observations_used": 36,
                    "orbit_uncertainty": "7",
                    "minimum_orbit_intersection": ".014373",
                    "jupiter_tisserand_invariant": "7.069",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".2966194645260153",
                    "semi_major_axis": ".8209982666655796",
                    "inclination": "15.59165870493936",
                    "ascending_node_longitude": "281.7057107920532",
                    "orbital_period": "271.7138569015312",
                    "perihelion_distance": ".5774742004304486",
                    "perihelion_argument": "328.4328774357979",
                    "aphelion_distance": "1.064522332900711",
                    "perihelion_time": "2460898.783813451972",
                    "mean_anomaly": "134.7661380794435",
                    "mean_motion": "1.324923226607702",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "ATE",
                        "orbit_class_description": "Near-Earth asteroid orbits similar to that of 2062 Aten",
                        "orbit_class_range": "a (semi-major axis) < 1.0 AU; q (perihelion) > 0.983 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3472370?"
                },
                "id": "3472370",
                "neo_reference_id": "3472370",
                "name": "(2009 UT19)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3472370",
                "absolute_magnitude_h": 22.78,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0738847787,
                        "estimated_diameter_max": 0.1652113876
                    },
                    "meters": {
                        "estimated_diameter_min": 73.884778657,
                        "estimated_diameter_max": 165.2113875797
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0459098588,
                        "estimated_diameter_max": 0.1026575651
                    },
                    "feet": {
                        "estimated_diameter_min": 242.4041372092,
                        "estimated_diameter_max": 542.0321288269
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-05",
                        "close_approach_date_full": "2025-Nov-05 16:52",
                        "epoch_date_close_approach": 1762361520000,
                        "relative_velocity": {
                            "kilometers_per_second": "18.637052549",
                            "kilometers_per_hour": "67093.3891764929",
                            "miles_per_hour": "41689.2228469158"
                        },
                        "miss_distance": {
                            "astronomical": "0.0695027589",
                            "lunar": "27.0365732121",
                            "kilometers": "10397464.690563543",
                            "miles": "6460684.9727731734"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "19",
                    "orbit_determination_date": "2025-11-01 06:19:46",
                    "first_observation_date": "2009-10-24",
                    "last_observation_date": "2025-10-31",
                    "data_arc_in_days": 5851,
                    "observations_used": 106,
                    "orbit_uncertainty": "1",
                    "minimum_orbit_intersection": ".0288847",
                    "jupiter_tisserand_invariant": "6.454",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".6611750517771474",
                    "semi_major_axis": ".8906409974333341",
                    "inclination": "9.674320787430229",
                    "ascending_node_longitude": "212.4280878592234",
                    "orbital_period": "307.0099497155952",
                    "perihelion_distance": ".3017713898404992",
                    "perihelion_argument": "328.5648926522952",
                    "aphelion_distance": "1.479510605026169",
                    "perihelion_time": "2461042.049546925222",
                    "mean_anomaly": "311.278983280717",
                    "mean_motion": "1.172600433091805",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "ATE",
                        "orbit_class_description": "Near-Earth asteroid orbits similar to that of 2062 Aten",
                        "orbit_class_range": "a (semi-major axis) < 1.0 AU; q (perihelion) > 0.983 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3551067?"
                },
                "id": "3551067",
                "neo_reference_id": "3551067",
                "name": "(2010 VD72)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3551067",
                "absolute_magnitude_h": 21.55,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.1301832102,
                        "estimated_diameter_max": 0.2910985075
                    },
                    "meters": {
                        "estimated_diameter_min": 130.1832101881,
                        "estimated_diameter_max": 291.0985075098
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0808920715,
                        "estimated_diameter_max": 0.1808801707
                    },
                    "feet": {
                        "estimated_diameter_min": 427.1102833136,
                        "estimated_diameter_max": 955.0476273785
                    }
                },
                "is_potentially_hazardous_asteroid": true,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-05",
                        "close_approach_date_full": "2025-Nov-05 02:15",
                        "epoch_date_close_approach": 1762308900000,
                        "relative_velocity": {
                            "kilometers_per_second": "13.9924817989",
                            "kilometers_per_hour": "50372.9344760414",
                            "miles_per_hour": "31299.7825359603"
                        },
                        "miss_distance": {
                            "astronomical": "0.1862034557",
                            "lunar": "72.4331442673",
                            "kilometers": "27855640.359359359",
                            "miles": "17308692.3045787942"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "26",
                    "orbit_determination_date": "2025-10-29 06:26:41",
                    "first_observation_date": "2010-11-09",
                    "last_observation_date": "2025-10-28",
                    "data_arc_in_days": 5467,
                    "observations_used": 82,
                    "orbit_uncertainty": "0",
                    "minimum_orbit_intersection": ".0136495",
                    "jupiter_tisserand_invariant": "6.446",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".1812892459690504",
                    "semi_major_axis": ".9184149939267658",
                    "inclination": "19.1967269566746",
                    "ascending_node_longitude": "224.0562373378786",
                    "orbital_period": "321.4821579684561",
                    "perihelion_distance": ".7519162321911125",
                    "perihelion_argument": "310.3032006420431",
                    "aphelion_distance": "1.084913755662419",
                    "perihelion_time": "2461075.530572131233",
                    "mean_anomaly": "275.9797665353039",
                    "mean_motion": "1.119813311802278",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "ATE",
                        "orbit_class_description": "Near-Earth asteroid orbits similar to that of 2062 Aten",
                        "orbit_class_range": "a (semi-major axis) < 1.0 AU; q (perihelion) > 0.983 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3559839?"
                },
                "id": "3559839",
                "neo_reference_id": "3559839",
                "name": "(2011 EL51)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3559839",
                "absolute_magnitude_h": 21.91,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.1102947845,
                        "estimated_diameter_max": 0.2466266358
                    },
                    "meters": {
                        "estimated_diameter_min": 110.2947845322,
                        "estimated_diameter_max": 246.6266357777
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0685339806,
                        "estimated_diameter_max": 0.1532466393
                    },
                    "feet": {
                        "estimated_diameter_min": 361.8595408847,
                        "estimated_diameter_max": 809.142531725
                    }
                },
                "is_potentially_hazardous_asteroid": true,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-05",
                        "close_approach_date_full": "2025-Nov-05 04:57",
                        "epoch_date_close_approach": 1762318620000,
                        "relative_velocity": {
                            "kilometers_per_second": "20.7313147165",
                            "kilometers_per_hour": "74632.7329794565",
                            "miles_per_hour": "46373.877889374"
                        },
                        "miss_distance": {
                            "astronomical": "0.0886001527",
                            "lunar": "34.4654594003",
                            "kilometers": "13254394.125594749",
                            "miles": "8235898.6059515762"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "12",
                    "orbit_determination_date": "2025-11-09 05:19:01",
                    "first_observation_date": "2011-03-11",
                    "last_observation_date": "2025-11-09",
                    "data_arc_in_days": 5357,
                    "observations_used": 46,
                    "orbit_uncertainty": "0",
                    "minimum_orbit_intersection": ".0470014",
                    "jupiter_tisserand_invariant": "5.141",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".5689273367455413",
                    "semi_major_axis": "1.191135722185759",
                    "inclination": "10.97400326830554",
                    "ascending_node_longitude": "198.4473331383854",
                    "orbital_period": "474.8323515390112",
                    "perihelion_distance": ".5134660480601383",
                    "perihelion_argument": "94.89613570383989",
                    "aphelion_distance": "1.86880539631138",
                    "perihelion_time": "2460932.284971396171",
                    "mean_anomaly": "51.71806473965747",
                    "mean_motion": ".7581623257833627",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3836745?"
                },
                "id": "3836745",
                "neo_reference_id": "3836745",
                "name": "(2018 XJ1)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3836745",
                "absolute_magnitude_h": 26.4,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0139493823,
                        "estimated_diameter_max": 0.0311917671
                    },
                    "meters": {
                        "estimated_diameter_min": 13.9493822934,
                        "estimated_diameter_max": 31.1917670523
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0086677416,
                        "estimated_diameter_max": 0.0193816595
                    },
                    "feet": {
                        "estimated_diameter_min": 45.7656914036,
                        "estimated_diameter_max": 102.3351970157
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-05",
                        "close_approach_date_full": "2025-Nov-05 21:12",
                        "epoch_date_close_approach": 1762377120000,
                        "relative_velocity": {
                            "kilometers_per_second": "11.6962254892",
                            "kilometers_per_hour": "42106.4117609695",
                            "miles_per_hour": "26163.286796698"
                        },
                        "miss_distance": {
                            "astronomical": "0.1994622797",
                            "lunar": "77.5908268033",
                            "kilometers": "29839132.188464239",
                            "miles": "18541176.9761109382"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "7",
                    "orbit_determination_date": "2021-04-15 20:55:51",
                    "first_observation_date": "2018-12-09",
                    "last_observation_date": "2018-12-19",
                    "data_arc_in_days": 10,
                    "observations_used": 45,
                    "orbit_uncertainty": "4",
                    "minimum_orbit_intersection": ".0134238",
                    "jupiter_tisserand_invariant": "4.012",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".4306944692631206",
                    "semi_major_axis": "1.752561064374437",
                    "inclination": "5.487091856245497",
                    "ascending_node_longitude": "83.98843304460074",
                    "orbital_period": "847.4384508476707",
                    "perihelion_distance": ".9977427069024793",
                    "perihelion_argument": "359.9721574615348",
                    "aphelion_distance": "2.507379421846395",
                    "perihelion_time": "2461011.586020311891",
                    "mean_anomaly": "355.2905520061205",
                    "mean_motion": ".4248096125918069",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3842898?"
                },
                "id": "3842898",
                "neo_reference_id": "3842898",
                "name": "(2019 LK6)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3842898",
                "absolute_magnitude_h": 24.03,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0415484643,
                        "estimated_diameter_max": 0.0929051906
                    },
                    "meters": {
                        "estimated_diameter_min": 41.5484643414,
                        "estimated_diameter_max": 92.9051906281
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0258170108,
                        "estimated_diameter_max": 0.0577285912
                    },
                    "feet": {
                        "estimated_diameter_min": 136.3138637498,
                        "estimated_diameter_max": 304.8070656203
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-05",
                        "close_approach_date_full": "2025-Nov-05 18:13",
                        "epoch_date_close_approach": 1762366380000,
                        "relative_velocity": {
                            "kilometers_per_second": "22.1637792267",
                            "kilometers_per_hour": "79789.6052161088",
                            "miles_per_hour": "49578.1577521983"
                        },
                        "miss_distance": {
                            "astronomical": "0.4267418708",
                            "lunar": "166.0025877412",
                            "kilometers": "63839674.911495196",
                            "miles": "39668134.5541618648"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "8",
                    "orbit_determination_date": "2022-09-04 05:57:05",
                    "first_observation_date": "2019-06-13",
                    "last_observation_date": "2019-06-28",
                    "data_arc_in_days": 15,
                    "observations_used": 60,
                    "orbit_uncertainty": "7",
                    "minimum_orbit_intersection": ".019084",
                    "jupiter_tisserand_invariant": "6.067",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".192480666148098",
                    "semi_major_axis": ".9824892266016471",
                    "inclination": "25.39039448935516",
                    "ascending_node_longitude": "257.2643818519883",
                    "orbital_period": "355.7051246793886",
                    "perihelion_distance": ".7933790457820324",
                    "perihelion_argument": "242.8018655358705",
                    "aphelion_distance": "1.171599407421262",
                    "perihelion_time": "2461037.167346710677",
                    "mean_anomaly": "322.889922298022",
                    "mean_motion": "1.012074257643835",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "ATE",
                        "orbit_class_description": "Near-Earth asteroid orbits similar to that of 2062 Aten",
                        "orbit_class_range": "a (semi-major axis) < 1.0 AU; q (perihelion) > 0.983 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54088811?"
                },
                "id": "54088811",
                "neo_reference_id": "54088811",
                "name": "(2020 WL)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54088811",
                "absolute_magnitude_h": 24.5,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0334622374,
                        "estimated_diameter_max": 0.0748238376
                    },
                    "meters": {
                        "estimated_diameter_min": 33.4622374455,
                        "estimated_diameter_max": 74.8238376074
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0207924639,
                        "estimated_diameter_max": 0.0464933628
                    },
                    "feet": {
                        "estimated_diameter_min": 109.7842471007,
                        "estimated_diameter_max": 245.4850393757
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-05",
                        "close_approach_date_full": "2025-Nov-05 20:15",
                        "epoch_date_close_approach": 1762373700000,
                        "relative_velocity": {
                            "kilometers_per_second": "8.9109270821",
                            "kilometers_per_hour": "32079.3374956996",
                            "miles_per_hour": "19932.8527900363"
                        },
                        "miss_distance": {
                            "astronomical": "0.1350833031",
                            "lunar": "52.5474049059",
                            "kilometers": "20208174.416324397",
                            "miles": "12556777.3168027986"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "6",
                    "orbit_determination_date": "2021-04-15 23:18:27",
                    "first_observation_date": "2020-11-14",
                    "last_observation_date": "2020-11-23",
                    "data_arc_in_days": 9,
                    "observations_used": 32,
                    "orbit_uncertainty": "7",
                    "minimum_orbit_intersection": ".0278325",
                    "jupiter_tisserand_invariant": "5.378",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".2238302789610986",
                    "semi_major_axis": "1.159345166370438",
                    "inclination": "14.63020508667012",
                    "ascending_node_longitude": "59.96025773171585",
                    "orbital_period": "455.9503572922686",
                    "perihelion_distance": ".8998486143695416",
                    "perihelion_argument": "257.5485985735403",
                    "aphelion_distance": "1.418841718371334",
                    "perihelion_time": "2460905.178812628493",
                    "mean_anomaly": "75.26176239345722",
                    "mean_motion": ".7895596400843186",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54306612?"
                },
                "id": "54306612",
                "neo_reference_id": "54306612",
                "name": "(2022 SS6)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54306612",
                "absolute_magnitude_h": 22.35,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0900647767,
                        "estimated_diameter_max": 0.2013909631
                    },
                    "meters": {
                        "estimated_diameter_min": 90.0647767018,
                        "estimated_diameter_max": 201.3909630836
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0559636404,
                        "estimated_diameter_max": 0.1251385041
                    },
                    "feet": {
                        "estimated_diameter_min": 295.4881219943,
                        "estimated_diameter_max": 660.7315273231
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-05",
                        "close_approach_date_full": "2025-Nov-05 12:02",
                        "epoch_date_close_approach": 1762344120000,
                        "relative_velocity": {
                            "kilometers_per_second": "19.3439966204",
                            "kilometers_per_hour": "69638.3878335617",
                            "miles_per_hour": "43270.5860402484"
                        },
                        "miss_distance": {
                            "astronomical": "0.4191761666",
                            "lunar": "163.0595288074",
                            "kilometers": "62707861.678125142",
                            "miles": "38964858.4222932796"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "20",
                    "orbit_determination_date": "2023-11-05 06:11:58",
                    "first_observation_date": "2022-09-08",
                    "last_observation_date": "2023-11-04",
                    "data_arc_in_days": 422,
                    "observations_used": 117,
                    "orbit_uncertainty": "1",
                    "minimum_orbit_intersection": ".162422",
                    "jupiter_tisserand_invariant": "6.132",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".2399879670359524",
                    "semi_major_axis": ".9724509640795426",
                    "inclination": "21.45187512683912",
                    "ascending_node_longitude": "23.6934537261795",
                    "orbital_period": "350.2676218270154",
                    "perihelion_distance": ".7390744341679412",
                    "perihelion_argument": "155.3430123157225",
                    "aphelion_distance": "1.205827493991144",
                    "perihelion_time": "2461070.022139599513",
                    "mean_anomaly": "288.5461495833464",
                    "mean_motion": "1.027785549010268",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "ATE",
                        "orbit_class_description": "Near-Earth asteroid orbits similar to that of 2062 Aten",
                        "orbit_class_range": "a (semi-major axis) < 1.0 AU; q (perihelion) > 0.983 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54312825?"
                },
                "id": "54312825",
                "neo_reference_id": "54312825",
                "name": "(2022 TF)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54312825",
                "absolute_magnitude_h": 25.33,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0228325794,
                        "estimated_diameter_max": 0.0510551996
                    },
                    "meters": {
                        "estimated_diameter_min": 22.8325794016,
                        "estimated_diameter_max": 51.0551996437
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0141875027,
                        "estimated_diameter_max": 0.0317242205
                    },
                    "feet": {
                        "estimated_diameter_min": 74.910039804,
                        "estimated_diameter_max": 167.5039411989
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-05",
                        "close_approach_date_full": "2025-Nov-05 20:29",
                        "epoch_date_close_approach": 1762374540000,
                        "relative_velocity": {
                            "kilometers_per_second": "13.8287633098",
                            "kilometers_per_hour": "49783.5479151493",
                            "miles_per_hour": "30933.5606476104"
                        },
                        "miss_distance": {
                            "astronomical": "0.2416943322",
                            "lunar": "94.0190952258",
                            "kilometers": "36156957.288192414",
                            "miles": "22466891.4552827532"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "8",
                    "orbit_determination_date": "2022-10-25 06:25:33",
                    "first_observation_date": "2022-10-02",
                    "last_observation_date": "2022-10-05",
                    "data_arc_in_days": 3,
                    "observations_used": 135,
                    "orbit_uncertainty": "7",
                    "minimum_orbit_intersection": ".0185582",
                    "jupiter_tisserand_invariant": "3.535",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".5155065237857848",
                    "semi_major_axis": "2.099778951603204",
                    "inclination": "13.79042159325533",
                    "ascending_node_longitude": "190.1140199877103",
                    "orbital_period": "1111.370318535346",
                    "perihelion_distance": "1.017329203543677",
                    "perihelion_argument": "186.4900577359775",
                    "aphelion_distance": "3.182228699662732",
                    "perihelion_time": "2460972.914035718009",
                    "mean_anomaly": "8.935767831738133",
                    "mean_motion": ".3239244327439274",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "AMO",
                        "orbit_class_description": "Near-Earth asteroid orbits similar to that of 1221 Amor",
                        "orbit_class_range": "1.017 AU < q (perihelion) < 1.3 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54427945?"
                },
                "id": "54427945",
                "neo_reference_id": "54427945",
                "name": "(2024 DY)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54427945",
                "absolute_magnitude_h": 29.02,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0041740243,
                        "estimated_diameter_max": 0.0093334022
                    },
                    "meters": {
                        "estimated_diameter_min": 4.1740243339,
                        "estimated_diameter_max": 9.3334021504
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0025936177,
                        "estimated_diameter_max": 0.0057995054
                    },
                    "feet": {
                        "estimated_diameter_min": 13.6943059957,
                        "estimated_diameter_max": 30.6213991111
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-05",
                        "close_approach_date_full": "2025-Nov-05 19:45",
                        "epoch_date_close_approach": 1762371900000,
                        "relative_velocity": {
                            "kilometers_per_second": "8.9245115912",
                            "kilometers_per_hour": "32128.2417283529",
                            "miles_per_hour": "19963.2399783757"
                        },
                        "miss_distance": {
                            "astronomical": "0.1223587416",
                            "lunar": "47.5975504824",
                            "kilometers": "18304607.119240392",
                            "miles": "11373955.4465737296"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "4",
                    "orbit_determination_date": "2024-03-01 04:49:33",
                    "first_observation_date": "2024-02-19",
                    "last_observation_date": "2024-03-01",
                    "data_arc_in_days": 11,
                    "observations_used": 28,
                    "orbit_uncertainty": "7",
                    "minimum_orbit_intersection": ".000682128",
                    "jupiter_tisserand_invariant": "4.324",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".4761293305925813",
                    "semi_major_axis": "1.545902811226192",
                    "inclination": ".7045019704952461",
                    "ascending_node_longitude": "146.2324611623784",
                    "orbital_period": "702.0559223552312",
                    "perihelion_distance": ".8098531405558755",
                    "perihelion_argument": "299.1028075377824",
                    "aphelion_distance": "2.281952481896508",
                    "perihelion_time": "2461016.225809496655",
                    "mean_anomaly": "351.9361246896066",
                    "mean_motion": ".5127796640362855",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54496024?"
                },
                "id": "54496024",
                "neo_reference_id": "54496024",
                "name": "(2024 UB5)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54496024",
                "absolute_magnitude_h": 28.29,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0058419115,
                        "estimated_diameter_max": 0.0130629113
                    },
                    "meters": {
                        "estimated_diameter_min": 5.8419115419,
                        "estimated_diameter_max": 13.0629113261
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0036299944,
                        "estimated_diameter_max": 0.0081169143
                    },
                    "feet": {
                        "estimated_diameter_min": 19.166377063,
                        "estimated_diameter_max": 42.8573219953
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-05",
                        "close_approach_date_full": "2025-Nov-05 02:43",
                        "epoch_date_close_approach": 1762310580000,
                        "relative_velocity": {
                            "kilometers_per_second": "19.3772101983",
                            "kilometers_per_hour": "69757.9567137173",
                            "miles_per_hour": "43344.8814924762"
                        },
                        "miss_distance": {
                            "astronomical": "0.2690758031",
                            "lunar": "104.6704874059",
                            "kilometers": "40253167.012299397",
                            "miles": "25012158.1522577986"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "4",
                    "orbit_determination_date": "2024-11-14 05:39:08",
                    "first_observation_date": "2024-10-27",
                    "last_observation_date": "2024-10-31",
                    "data_arc_in_days": 4,
                    "observations_used": 32,
                    "orbit_uncertainty": "7",
                    "minimum_orbit_intersection": ".00145304",
                    "jupiter_tisserand_invariant": "5.888",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".3503545507393748",
                    "semi_major_axis": "1.029457473330221",
                    "inclination": ".5200693614608145",
                    "ascending_node_longitude": "10.26175673014878",
                    "orbital_period": "381.5144950417904",
                    "perihelion_distance": ".6687823627563196",
                    "perihelion_argument": "276.3715279297946",
                    "aphelion_distance": "1.390132583904123",
                    "perihelion_time": "2460921.411522929411",
                    "mean_anomaly": "74.62849279761558",
                    "mean_motion": ".9436076602032284",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": true,
                "sentry_data": "http://api.nasa.gov/neo/rest/v1/neo/sentry/54496024?"
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54527457?"
                },
                "id": "54527457",
                "neo_reference_id": "54527457",
                "name": "(2025 HE3)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54527457",
                "absolute_magnitude_h": 28.22,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0060333008,
                        "estimated_diameter_max": 0.0134908707
                    },
                    "meters": {
                        "estimated_diameter_min": 6.0333007763,
                        "estimated_diameter_max": 13.4908706645
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0037489181,
                        "estimated_diameter_max": 0.0083828358
                    },
                    "feet": {
                        "estimated_diameter_min": 19.7942945189,
                        "estimated_diameter_max": 44.261388111
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-05",
                        "close_approach_date_full": "2025-Nov-05 03:36",
                        "epoch_date_close_approach": 1762313760000,
                        "relative_velocity": {
                            "kilometers_per_second": "4.8968589614",
                            "kilometers_per_hour": "17628.6922611899",
                            "miles_per_hour": "10953.7838108488"
                        },
                        "miss_distance": {
                            "astronomical": "0.1515462975",
                            "lunar": "58.9515097275",
                            "kilometers": "22671003.312386325",
                            "miles": "14087108.230428285"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "5",
                    "orbit_determination_date": "2025-05-10 06:17:42",
                    "first_observation_date": "2025-04-24",
                    "last_observation_date": "2025-05-02",
                    "data_arc_in_days": 8,
                    "observations_used": 57,
                    "orbit_uncertainty": "5",
                    "minimum_orbit_intersection": ".00122814",
                    "jupiter_tisserand_invariant": "6.346",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".1359355493688871",
                    "semi_major_axis": ".945320167892472",
                    "inclination": "5.113721564015856",
                    "ascending_node_longitude": "211.7259503848738",
                    "orbital_period": "335.7119587727941",
                    "perihelion_distance": ".8168175515405203",
                    "perihelion_argument": "233.9768419757804",
                    "aphelion_distance": "1.073822784244424",
                    "perihelion_time": "2461017.777729586565",
                    "mean_anomaly": "341.4722636813391",
                    "mean_motion": "1.072347858312798",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "ATE",
                        "orbit_class_description": "Near-Earth asteroid orbits similar to that of 2062 Aten",
                        "orbit_class_range": "a (semi-major axis) < 1.0 AU; q (perihelion) > 0.983 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54535146?"
                },
                "id": "54535146",
                "neo_reference_id": "54535146",
                "name": "(2025 MK2)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54535146",
                "absolute_magnitude_h": 27.17,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0097848681,
                        "estimated_diameter_max": 0.0218796303
                    },
                    "meters": {
                        "estimated_diameter_min": 9.7848681194,
                        "estimated_diameter_max": 21.8796302659
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0060800333,
                        "estimated_diameter_max": 0.0135953677
                    },
                    "feet": {
                        "estimated_diameter_min": 32.1025867209,
                        "estimated_diameter_max": 71.7835661615
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-05",
                        "close_approach_date_full": "2025-Nov-05 13:07",
                        "epoch_date_close_approach": 1762348020000,
                        "relative_velocity": {
                            "kilometers_per_second": "3.7419681358",
                            "kilometers_per_hour": "13471.0852887289",
                            "miles_per_hour": "8370.4085228772"
                        },
                        "miss_distance": {
                            "astronomical": "0.1692760626",
                            "lunar": "65.8483883514",
                            "kilometers": "25323338.406946662",
                            "miles": "15735192.8354894556"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "3",
                    "orbit_determination_date": "2025-06-26 06:48:23",
                    "first_observation_date": "2025-06-22",
                    "last_observation_date": "2025-06-26",
                    "data_arc_in_days": 4,
                    "observations_used": 33,
                    "orbit_uncertainty": "6",
                    "minimum_orbit_intersection": ".0142712",
                    "jupiter_tisserand_invariant": "5.436",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".1457087798864196",
                    "semi_major_axis": "1.153687405102917",
                    "inclination": "6.653865593938495",
                    "ascending_node_longitude": "268.2097659839162",
                    "orbital_period": "452.6167835069384",
                    "perihelion_distance": ".9855850209350412",
                    "perihelion_argument": "52.47624624550897",
                    "aphelion_distance": "1.321789789270792",
                    "perihelion_time": "2460897.218659341536",
                    "mean_anomaly": "82.14737939888386",
                    "mean_motion": ".7953748361045506",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54547365?"
                },
                "id": "54547365",
                "neo_reference_id": "54547365",
                "name": "(2025 SO6)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54547365",
                "absolute_magnitude_h": 24.8,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0291443905,
                        "estimated_diameter_max": 0.0651688382
                    },
                    "meters": {
                        "estimated_diameter_min": 29.1443904535,
                        "estimated_diameter_max": 65.1688382168
                    },
                    "miles": {
                        "estimated_diameter_min": 0.018109479,
                        "estimated_diameter_max": 0.0404940262
                    },
                    "feet": {
                        "estimated_diameter_min": 95.6180819754,
                        "estimated_diameter_max": 213.8085311752
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-05",
                        "close_approach_date_full": "2025-Nov-05 10:05",
                        "epoch_date_close_approach": 1762337100000,
                        "relative_velocity": {
                            "kilometers_per_second": "3.1989515249",
                            "kilometers_per_hour": "11516.2254897981",
                            "miles_per_hour": "7155.7346661471"
                        },
                        "miss_distance": {
                            "astronomical": "0.0788652316",
                            "lunar": "30.6785750924",
                            "kilometers": "11798070.664416692",
                            "miles": "7330981.1687546696"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "9",
                    "orbit_determination_date": "2025-11-12 06:09:57",
                    "first_observation_date": "2025-09-13",
                    "last_observation_date": "2025-11-11",
                    "data_arc_in_days": 59,
                    "observations_used": 37,
                    "orbit_uncertainty": "6",
                    "minimum_orbit_intersection": ".0686837",
                    "jupiter_tisserand_invariant": "4.853",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".2355223825921796",
                    "semi_major_axis": "1.345848444817369",
                    "inclination": "3.191670572677719",
                    "ascending_node_longitude": "138.3180057465065",
                    "orbital_period": "570.2859372186672",
                    "perihelion_distance": "1.028871012486003",
                    "perihelion_argument": "279.9755225655875",
                    "aphelion_distance": "1.662825877148735",
                    "perihelion_time": "2460997.743521164198",
                    "mean_anomaly": "1.740061109920186",
                    "mean_motion": ".6312622782805245",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "AMO",
                        "orbit_class_description": "Near-Earth asteroid orbits similar to that of 1221 Amor",
                        "orbit_class_range": "1.017 AU < q (perihelion) < 1.3 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54553930?"
                },
                "id": "54553930",
                "neo_reference_id": "54553930",
                "name": "(2025 UT2)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54553930",
                "absolute_magnitude_h": 24.99,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0267026877,
                        "estimated_diameter_max": 0.0597090249
                    },
                    "meters": {
                        "estimated_diameter_min": 26.7026877056,
                        "estimated_diameter_max": 59.7090248917
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0165922758,
                        "estimated_diameter_max": 0.0371014565
                    },
                    "feet": {
                        "estimated_diameter_min": 87.607245932,
                        "estimated_diameter_max": 195.8957572256
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-05",
                        "close_approach_date_full": "2025-Nov-05 01:09",
                        "epoch_date_close_approach": 1762304940000,
                        "relative_velocity": {
                            "kilometers_per_second": "11.4996704541",
                            "kilometers_per_hour": "41398.8136346149",
                            "miles_per_hour": "25723.6128386861"
                        },
                        "miss_distance": {
                            "astronomical": "0.0541440245",
                            "lunar": "21.0620255305",
                            "kilometers": "8099830.738427815",
                            "miles": "5033001.437481247"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "9",
                    "orbit_determination_date": "2025-11-06 07:50:05",
                    "first_observation_date": "2025-10-19",
                    "last_observation_date": "2025-11-06",
                    "data_arc_in_days": 18,
                    "observations_used": 49,
                    "orbit_uncertainty": "7",
                    "minimum_orbit_intersection": ".0374365",
                    "jupiter_tisserand_invariant": "5.928",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".3892003659253395",
                    "semi_major_axis": "1.014730755716284",
                    "inclination": "10.37276948007771",
                    "ascending_node_longitude": "30.90182966648414",
                    "orbital_period": "373.3573130879709",
                    "perihelion_distance": ".6197971742758102",
                    "perihelion_argument": "122.8280058522314",
                    "aphelion_distance": "1.409664337156758",
                    "perihelion_time": "2461055.066129500587",
                    "mean_anomaly": "307.3860403115159",
                    "mean_motion": ".9642237807597901",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54555528?"
                },
                "id": "54555528",
                "neo_reference_id": "54555528",
                "name": "(2025 UT11)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54555528",
                "absolute_magnitude_h": 27.237,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0094875696,
                        "estimated_diameter_max": 0.0212148507
                    },
                    "meters": {
                        "estimated_diameter_min": 9.4875696381,
                        "estimated_diameter_max": 21.2148506521
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0058953006,
                        "estimated_diameter_max": 0.013182293
                    },
                    "feet": {
                        "estimated_diameter_min": 31.1271979715,
                        "estimated_diameter_max": 69.6025306133
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-05",
                        "close_approach_date_full": "2025-Nov-05 05:47",
                        "epoch_date_close_approach": 1762321620000,
                        "relative_velocity": {
                            "kilometers_per_second": "7.688236636",
                            "kilometers_per_hour": "27677.6518896099",
                            "miles_per_hour": "17197.8165310746"
                        },
                        "miss_distance": {
                            "astronomical": "0.0365070789",
                            "lunar": "14.2012536921",
                            "kilometers": "5461381.243361943",
                            "miles": "3393544.9438550934"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "1",
                    "orbit_determination_date": "2025-10-31 07:12:43",
                    "first_observation_date": "2025-10-29",
                    "last_observation_date": "2025-10-31",
                    "data_arc_in_days": 2,
                    "observations_used": 14,
                    "orbit_uncertainty": "8",
                    "minimum_orbit_intersection": ".0195172",
                    "jupiter_tisserand_invariant": "3.421",
                    "epoch_osculation": "2460978.5",
                    "eccentricity": ".5515003287690465",
                    "semi_major_axis": "2.235251560576567",
                    "inclination": ".900684655342021",
                    "ascending_node_longitude": "187.92794434",
                    "orbital_period": "1220.641235166785",
                    "perihelion_distance": "1.002509590037066",
                    "perihelion_argument": "234.2164055667147",
                    "aphelion_distance": "3.467993531116068",
                    "perihelion_time": "2460999.897341958581",
                    "mean_anomaly": "353.6893471372556",
                    "mean_motion": ".2949269528411521",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54560902?"
                },
                "id": "54560902",
                "neo_reference_id": "54560902",
                "name": "(2025 VO)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54560902",
                "absolute_magnitude_h": 26.192,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.015351647,
                        "estimated_diameter_max": 0.0343273263
                    },
                    "meters": {
                        "estimated_diameter_min": 15.3516470372,
                        "estimated_diameter_max": 34.3273263417
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0095390683,
                        "estimated_diameter_max": 0.0213300051
                    },
                    "feet": {
                        "estimated_diameter_min": 50.3662976654,
                        "estimated_diameter_max": 112.6224653549
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-05",
                        "close_approach_date_full": "2025-Nov-05 00:24",
                        "epoch_date_close_approach": 1762302240000,
                        "relative_velocity": {
                            "kilometers_per_second": "12.3749749783",
                            "kilometers_per_hour": "44549.9099217043",
                            "miles_per_hour": "27681.5815288501"
                        },
                        "miss_distance": {
                            "astronomical": "0.0105292299",
                            "lunar": "4.0958704311",
                            "kilometers": "1575150.365780313",
                            "miles": "978753.0519137994"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "2",
                    "orbit_determination_date": "2025-11-09 05:19:10",
                    "first_observation_date": "2025-11-07",
                    "last_observation_date": "2025-11-08",
                    "data_arc_in_days": 1,
                    "observations_used": 16,
                    "orbit_uncertainty": "6",
                    "minimum_orbit_intersection": ".00969112",
                    "jupiter_tisserand_invariant": "6.984",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".2463955855484436",
                    "semi_major_axis": ".8300802397696742",
                    "inclination": "22.54467756853433",
                    "ascending_node_longitude": "43.05350939285705",
                    "orbital_period": "276.2348954902656",
                    "perihelion_distance": ".6255521330394328",
                    "perihelion_argument": "205.7862953841679",
                    "aphelion_distance": "1.034608346499916",
                    "perihelion_time": "2460878.388020522561",
                    "mean_anomaly": "159.1410546949785",
                    "mean_motion": "1.303238677941347",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "ATE",
                        "orbit_class_description": "Near-Earth asteroid orbits similar to that of 2062 Aten",
                        "orbit_class_range": "a (semi-major axis) < 1.0 AU; q (perihelion) > 0.983 AU"
                    }
                },
                "is_sentry_object": false
            }
        ],
        "2025-10-31": [
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/2164294?"
                },
                "id": "2164294",
                "neo_reference_id": "2164294",
                "name": "164294 (2004 XZ130)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=2164294",
                "absolute_magnitude_h": 20.45,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.2160503512,
                        "estimated_diameter_max": 0.4831032718
                    },
                    "meters": {
                        "estimated_diameter_min": 216.0503511964,
                        "estimated_diameter_max": 483.1032718379
                    },
                    "miles": {
                        "estimated_diameter_min": 0.1342474228,
                        "estimated_diameter_max": 0.3001863631
                    },
                    "feet": {
                        "estimated_diameter_min": 708.8266342193,
                        "estimated_diameter_max": 1584.9845383766
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-10-31",
                        "close_approach_date_full": "2025-Oct-31 23:17",
                        "epoch_date_close_approach": 1761952620000,
                        "relative_velocity": {
                            "kilometers_per_second": "6.9416652531",
                            "kilometers_per_hour": "24989.994911284",
                            "miles_per_hour": "15527.8110047364"
                        },
                        "miss_distance": {
                            "astronomical": "0.0959833877",
                            "lunar": "37.3375378153",
                            "kilometers": "14358910.355304199",
                            "miles": "8922213.1662639862"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "20",
                    "orbit_determination_date": "2021-04-13 20:18:18",
                    "first_observation_date": "2004-12-13",
                    "last_observation_date": "2014-09-16",
                    "data_arc_in_days": 3564,
                    "observations_used": 72,
                    "orbit_uncertainty": "1",
                    "minimum_orbit_intersection": ".0949676",
                    "jupiter_tisserand_invariant": "9.038",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".4544670604192123",
                    "semi_major_axis": ".61757475580428",
                    "inclination": "2.953015945981771",
                    "ascending_node_longitude": "211.1394394937766",
                    "orbital_period": "177.2689734950002",
                    "perihelion_distance": ".336907371944796",
                    "perihelion_argument": "5.45185533189696",
                    "aphelion_distance": ".898242139663764",
                    "perihelion_time": "2461066.143180562303",
                    "mean_anomaly": "226.6910258658674",
                    "mean_motion": "2.030812233535914",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "IEO",
                        "orbit_class_description": "An asteroid orbit contained entirely within the orbit of the Earth - Interior Earth Object",
                        "orbit_class_range": "q (perihelion) < 0.983 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3692560?"
                },
                "id": "3692560",
                "neo_reference_id": "3692560",
                "name": "(2014 TU)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3692560",
                "absolute_magnitude_h": 25.09,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0255008688,
                        "estimated_diameter_max": 0.0570216761
                    },
                    "meters": {
                        "estimated_diameter_min": 25.5008687857,
                        "estimated_diameter_max": 57.0216760901
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0158455003,
                        "estimated_diameter_max": 0.0354316159
                    },
                    "feet": {
                        "estimated_diameter_min": 83.6642703469,
                        "estimated_diameter_max": 187.0789957835
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-10-31",
                        "close_approach_date_full": "2025-Oct-31 14:58",
                        "epoch_date_close_approach": 1761922680000,
                        "relative_velocity": {
                            "kilometers_per_second": "6.0795351076",
                            "kilometers_per_hour": "21886.3263873747",
                            "miles_per_hour": "13599.3120821995"
                        },
                        "miss_distance": {
                            "astronomical": "0.2636972222",
                            "lunar": "102.5782194358",
                            "kilometers": "39448542.766036714",
                            "miles": "24512187.8295620932"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "7",
                    "orbit_determination_date": "2021-04-15 11:27:43",
                    "first_observation_date": "2014-10-01",
                    "last_observation_date": "2014-10-19",
                    "data_arc_in_days": 18,
                    "observations_used": 22,
                    "orbit_uncertainty": "7",
                    "minimum_orbit_intersection": ".0070692",
                    "jupiter_tisserand_invariant": "5.775",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".2348558484839547",
                    "semi_major_axis": "1.062576035148997",
                    "inclination": "2.523024935202746",
                    "ascending_node_longitude": "342.4195294051922",
                    "orbital_period": "400.0722715517191",
                    "perihelion_distance": ".8130238388353631",
                    "perihelion_argument": "278.7374675113538",
                    "aphelion_distance": "1.312128231462631",
                    "perihelion_time": "2460843.307103012075",
                    "mean_anomaly": "141.4480506138686",
                    "mean_motion": ".8998374183836962",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3761747?"
                },
                "id": "3761747",
                "neo_reference_id": "3761747",
                "name": "(2016 UO41)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3761747",
                "absolute_magnitude_h": 24.4,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0350392641,
                        "estimated_diameter_max": 0.0783501764
                    },
                    "meters": {
                        "estimated_diameter_min": 35.0392641108,
                        "estimated_diameter_max": 78.3501764334
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0217723826,
                        "estimated_diameter_max": 0.0486845275
                    },
                    "feet": {
                        "estimated_diameter_min": 114.9582192654,
                        "estimated_diameter_max": 257.0543928497
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-10-31",
                        "close_approach_date_full": "2025-Oct-31 07:35",
                        "epoch_date_close_approach": 1761896100000,
                        "relative_velocity": {
                            "kilometers_per_second": "28.146954899",
                            "kilometers_per_hour": "101329.0376365361",
                            "miles_per_hour": "62961.9234136577"
                        },
                        "miss_distance": {
                            "astronomical": "0.4657657685",
                            "lunar": "181.1828839465",
                            "kilometers": "69677566.886513095",
                            "miles": "43295632.418126911"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "7",
                    "orbit_determination_date": "2021-04-15 17:59:12",
                    "first_observation_date": "2016-10-26",
                    "last_observation_date": "2018-10-26",
                    "data_arc_in_days": 730,
                    "observations_used": 45,
                    "orbit_uncertainty": "2",
                    "minimum_orbit_intersection": ".0471193",
                    "jupiter_tisserand_invariant": "5.958",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".4214188033297685",
                    "semi_major_axis": "1.006141299924268",
                    "inclination": "9.45821900614339",
                    "ascending_node_longitude": "216.1297773333009",
                    "orbital_period": "368.626787246146",
                    "perihelion_distance": ".582134437329525",
                    "perihelion_argument": "48.58639224543261",
                    "aphelion_distance": "1.43014816251901",
                    "perihelion_time": "2460922.487454437236",
                    "mean_anomaly": "76.18685720699362",
                    "mean_motion": ".9765975030990205",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54135787?"
                },
                "id": "54135787",
                "neo_reference_id": "54135787",
                "name": "(2021 GD5)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54135787",
                "absolute_magnitude_h": 27.2,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0096506147,
                        "estimated_diameter_max": 0.0215794305
                    },
                    "meters": {
                        "estimated_diameter_min": 9.6506146958,
                        "estimated_diameter_max": 21.5794304844
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0059966121,
                        "estimated_diameter_max": 0.0134088323
                    },
                    "feet": {
                        "estimated_diameter_min": 31.6621227185,
                        "estimated_diameter_max": 70.7986587106
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-10-31",
                        "close_approach_date_full": "2025-Oct-31 06:49",
                        "epoch_date_close_approach": 1761893340000,
                        "relative_velocity": {
                            "kilometers_per_second": "20.3204337581",
                            "kilometers_per_hour": "73153.5615290498",
                            "miles_per_hour": "45454.7782734254"
                        },
                        "miss_distance": {
                            "astronomical": "0.354566142",
                            "lunar": "137.926229238",
                            "kilometers": "53042339.61731754",
                            "miles": "32958981.509920452"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "2",
                    "orbit_determination_date": "2021-04-15 23:27:09",
                    "first_observation_date": "2021-04-08",
                    "last_observation_date": "2021-04-10",
                    "data_arc_in_days": 2,
                    "observations_used": 62,
                    "orbit_uncertainty": "7",
                    "minimum_orbit_intersection": ".00869983",
                    "jupiter_tisserand_invariant": "5.936",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".2210521321126494",
                    "semi_major_axis": ".9904183251064093",
                    "inclination": "36.73328444743996",
                    "ascending_node_longitude": "18.89971775885534",
                    "orbital_period": "360.0198343350532",
                    "perihelion_distance": ".7714842426581984",
                    "perihelion_argument": "71.74762206014128",
                    "aphelion_distance": "1.20935240755462",
                    "perihelion_time": "2461030.767206714049",
                    "mean_anomaly": "329.7344607771889",
                    "mean_motion": ".9999449076601853",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "ATE",
                        "orbit_class_description": "Near-Earth asteroid orbits similar to that of 2062 Aten",
                        "orbit_class_range": "a (semi-major axis) < 1.0 AU; q (perihelion) > 0.983 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54214728?"
                },
                "id": "54214728",
                "neo_reference_id": "54214728",
                "name": "(2021 UN7)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54214728",
                "absolute_magnitude_h": 23.36,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0565659358,
                        "estimated_diameter_max": 0.1264852778
                    },
                    "meters": {
                        "estimated_diameter_min": 56.5659358422,
                        "estimated_diameter_max": 126.4852777541
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0351484321,
                        "estimated_diameter_max": 0.0785942835
                    },
                    "feet": {
                        "estimated_diameter_min": 185.5837849486,
                        "estimated_diameter_max": 414.9779586668
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-10-31",
                        "close_approach_date_full": "2025-Oct-31 03:17",
                        "epoch_date_close_approach": 1761880620000,
                        "relative_velocity": {
                            "kilometers_per_second": "15.0140465858",
                            "kilometers_per_hour": "54050.5677087626",
                            "miles_per_hour": "33584.9208077031"
                        },
                        "miss_distance": {
                            "astronomical": "0.1004555444",
                            "lunar": "39.0772067716",
                            "kilometers": "15027935.471930428",
                            "miles": "9337926.0968707864"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "20",
                    "orbit_determination_date": "2025-11-12 06:09:49",
                    "first_observation_date": "2014-11-11",
                    "last_observation_date": "2025-11-11",
                    "data_arc_in_days": 4018,
                    "observations_used": 117,
                    "orbit_uncertainty": "0",
                    "minimum_orbit_intersection": ".0975773",
                    "jupiter_tisserand_invariant": "5.964",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".3933720263656256",
                    "semi_major_axis": ".9991281658946071",
                    "inclination": "20.29951282340712",
                    "ascending_node_longitude": "49.89343271027399",
                    "orbital_period": "364.7793373217698",
                    "perihelion_distance": ".6060990946776745",
                    "perihelion_argument": "227.2613361262771",
                    "aphelion_distance": "1.39215723711154",
                    "perihelion_time": "2460902.181195422846",
                    "mean_anomaly": "97.0306320189237",
                    "mean_motion": ".9868980042650989",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "ATE",
                        "orbit_class_description": "Near-Earth asteroid orbits similar to that of 2062 Aten",
                        "orbit_class_range": "a (semi-major axis) < 1.0 AU; q (perihelion) > 0.983 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54218581?"
                },
                "id": "54218581",
                "neo_reference_id": "54218581",
                "name": "(2021 UP20)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54218581",
                "absolute_magnitude_h": 24.22,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0380675544,
                        "estimated_diameter_max": 0.0851216393
                    },
                    "meters": {
                        "estimated_diameter_min": 38.0675543627,
                        "estimated_diameter_max": 85.1216392921
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0236540743,
                        "estimated_diameter_max": 0.0528921181
                    },
                    "feet": {
                        "estimated_diameter_min": 124.8935550553,
                        "estimated_diameter_max": 279.2704790552
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-10-31",
                        "close_approach_date_full": "2025-Oct-31 12:53",
                        "epoch_date_close_approach": 1761915180000,
                        "relative_velocity": {
                            "kilometers_per_second": "21.1809955001",
                            "kilometers_per_hour": "76251.5838005062",
                            "miles_per_hour": "47379.7688342645"
                        },
                        "miss_distance": {
                            "astronomical": "0.3905576865",
                            "lunar": "151.9269400485",
                            "kilometers": "58426598.012527755",
                            "miles": "36304604.538102819"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "5",
                    "orbit_determination_date": "2021-11-22 04:48:05",
                    "first_observation_date": "2021-10-14",
                    "last_observation_date": "2021-11-21",
                    "data_arc_in_days": 38,
                    "observations_used": 43,
                    "orbit_uncertainty": "5",
                    "minimum_orbit_intersection": ".0477916",
                    "jupiter_tisserand_invariant": "4.283",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".4104923155952558",
                    "semi_major_axis": "1.569680659850596",
                    "inclination": "14.80359052562186",
                    "ascending_node_longitude": "52.61683911521679",
                    "orbital_period": "718.3157481213603",
                    "perihelion_distance": ".9253388110434358",
                    "perihelion_argument": "54.99946909712266",
                    "aphelion_distance": "2.214022508657756",
                    "perihelion_time": "2461018.352932654698",
                    "mean_anomaly": "351.0526035764912",
                    "mean_motion": ".5011723617942698",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54280484?"
                },
                "id": "54280484",
                "neo_reference_id": "54280484",
                "name": "(2022 KP3)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54280484",
                "absolute_magnitude_h": 28.43,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0054771543,
                        "estimated_diameter_max": 0.0122472894
                    },
                    "meters": {
                        "estimated_diameter_min": 5.4771543095,
                        "estimated_diameter_max": 12.2472893592
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0034033449,
                        "estimated_diameter_max": 0.0076101104
                    },
                    "feet": {
                        "estimated_diameter_min": 17.9696669447,
                        "estimated_diameter_max": 40.1813968214
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-10-31",
                        "close_approach_date_full": "2025-Oct-31 23:07",
                        "epoch_date_close_approach": 1761952020000,
                        "relative_velocity": {
                            "kilometers_per_second": "5.0684069287",
                            "kilometers_per_hour": "18246.2649434109",
                            "miles_per_hour": "11337.5194588655"
                        },
                        "miss_distance": {
                            "astronomical": "0.3663346403",
                            "lunar": "142.5041750767",
                            "kilometers": "54802881.896096161",
                            "miles": "34052931.7548065818"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "2",
                    "orbit_determination_date": "2022-05-28 05:53:53",
                    "first_observation_date": "2022-05-21",
                    "last_observation_date": "2022-05-28",
                    "data_arc_in_days": 7,
                    "observations_used": 15,
                    "orbit_uncertainty": "7",
                    "minimum_orbit_intersection": ".00494389",
                    "jupiter_tisserand_invariant": "4.943",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".2880886715967388",
                    "semi_major_axis": "1.306034700542837",
                    "inclination": "1.186989927534582",
                    "ascending_node_longitude": "59.00226170427653",
                    "orbital_period": "545.1681820280827",
                    "perihelion_distance": ".9297808986042067",
                    "perihelion_argument": "245.1267274433844",
                    "aphelion_distance": "1.682288502481468",
                    "perihelion_time": "2460872.074765994051",
                    "mean_anomaly": "84.80517712928496",
                    "mean_motion": ".6603466817538073",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54358249?"
                },
                "id": "54358249",
                "neo_reference_id": "54358249",
                "name": "(2023 JX1)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54358249",
                "absolute_magnitude_h": 24.71,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0303777061,
                        "estimated_diameter_max": 0.0679266159
                    },
                    "meters": {
                        "estimated_diameter_min": 30.3777061387,
                        "estimated_diameter_max": 67.9266159267
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0188758256,
                        "estimated_diameter_max": 0.0422076293
                    },
                    "feet": {
                        "estimated_diameter_min": 99.6643934081,
                        "estimated_diameter_max": 222.8563585969
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-10-31",
                        "close_approach_date_full": "2025-Oct-31 02:00",
                        "epoch_date_close_approach": 1761876000000,
                        "relative_velocity": {
                            "kilometers_per_second": "10.8551889628",
                            "kilometers_per_hour": "39078.6802661668",
                            "miles_per_hour": "24281.9721909412"
                        },
                        "miss_distance": {
                            "astronomical": "0.302980619",
                            "lunar": "117.859460791",
                            "kilometers": "45325255.25368153",
                            "miles": "28163807.641523914"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "3",
                    "orbit_determination_date": "2023-05-25 06:14:50",
                    "first_observation_date": "2023-05-12",
                    "last_observation_date": "2023-05-25",
                    "data_arc_in_days": 13,
                    "observations_used": 32,
                    "orbit_uncertainty": "7",
                    "minimum_orbit_intersection": ".0757228",
                    "jupiter_tisserand_invariant": "6.240",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".3806051935525373",
                    "semi_major_axis": ".9529287852992118",
                    "inclination": "10.03707539966766",
                    "ascending_node_longitude": "70.67513668323905",
                    "orbital_period": "339.7731807565795",
                    "perihelion_distance": ".590239140528621",
                    "perihelion_argument": "32.2782377805078",
                    "aphelion_distance": "1.315618430069802",
                    "perihelion_time": "2461014.147494762208",
                    "mean_anomaly": "345.5400649826013",
                    "mean_motion": "1.059530358453781",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "ATE",
                        "orbit_class_description": "Near-Earth asteroid orbits similar to that of 2062 Aten",
                        "orbit_class_range": "a (semi-major axis) < 1.0 AU; q (perihelion) > 0.983 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54497569?"
                },
                "id": "54497569",
                "neo_reference_id": "54497569",
                "name": "(2024 VD1)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54497569",
                "absolute_magnitude_h": 25.58,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0203495578,
                        "estimated_diameter_max": 0.0455029946
                    },
                    "meters": {
                        "estimated_diameter_min": 20.3495578117,
                        "estimated_diameter_max": 45.502994579
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0126446251,
                        "estimated_diameter_max": 0.0282742412
                    },
                    "feet": {
                        "estimated_diameter_min": 66.7636432509,
                        "estimated_diameter_max": 149.2880447347
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-10-31",
                        "close_approach_date_full": "2025-Oct-31 06:08",
                        "epoch_date_close_approach": 1761890880000,
                        "relative_velocity": {
                            "kilometers_per_second": "12.6829801507",
                            "kilometers_per_hour": "45658.7285425427",
                            "miles_per_hour": "28370.5582991149"
                        },
                        "miss_distance": {
                            "astronomical": "0.085660509",
                            "lunar": "33.321938001",
                            "kilometers": "12814629.68951583",
                            "miles": "7962641.656465254"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "4",
                    "orbit_determination_date": "2024-11-12 05:20:00",
                    "first_observation_date": "2024-11-03",
                    "last_observation_date": "2024-11-12",
                    "data_arc_in_days": 9,
                    "observations_used": 27,
                    "orbit_uncertainty": "7",
                    "minimum_orbit_intersection": ".00303634",
                    "jupiter_tisserand_invariant": "6.024",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".4075729439380938",
                    "semi_major_axis": ".9905202750402945",
                    "inclination": "14.6395246936084",
                    "ascending_node_longitude": "219.1340002672304",
                    "orbital_period": "360.0754243951885",
                    "perihelion_distance": ".5868110105117512",
                    "perihelion_argument": "66.51298992031737",
                    "aphelion_distance": "1.394229539568838",
                    "perihelion_time": "2460909.936257661833",
                    "mean_anomaly": "90.54477210296368",
                    "mean_motion": ".9997905316773142",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "ATE",
                        "orbit_class_description": "Near-Earth asteroid orbits similar to that of 2062 Aten",
                        "orbit_class_range": "a (semi-major axis) < 1.0 AU; q (perihelion) > 0.983 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54499610?"
                },
                "id": "54499610",
                "neo_reference_id": "54499610",
                "name": "(2024 VX3)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54499610",
                "absolute_magnitude_h": 28.26,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0059231806,
                        "estimated_diameter_max": 0.0132446345
                    },
                    "meters": {
                        "estimated_diameter_min": 5.9231806268,
                        "estimated_diameter_max": 13.2446345244
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0036804927,
                        "estimated_diameter_max": 0.0082298318
                    },
                    "feet": {
                        "estimated_diameter_min": 19.4330079275,
                        "estimated_diameter_max": 43.4535267332
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-10-31",
                        "close_approach_date_full": "2025-Oct-31 03:11",
                        "epoch_date_close_approach": 1761880260000,
                        "relative_velocity": {
                            "kilometers_per_second": "18.1283569417",
                            "kilometers_per_hour": "65262.0849900124",
                            "miles_per_hour": "40551.3216428218"
                        },
                        "miss_distance": {
                            "astronomical": "0.3811821188",
                            "lunar": "148.2798442132",
                            "kilometers": "57024033.054566956",
                            "miles": "35433091.0858417528"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "2",
                    "orbit_determination_date": "2024-11-15 05:38:27",
                    "first_observation_date": "2024-11-12",
                    "last_observation_date": "2024-11-13",
                    "data_arc_in_days": 1,
                    "observations_used": 48,
                    "orbit_uncertainty": "5",
                    "minimum_orbit_intersection": ".000555279",
                    "jupiter_tisserand_invariant": "6.264",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".2270190492676355",
                    "semi_major_axis": ".9583896290311831",
                    "inclination": "3.333448324739734",
                    "ascending_node_longitude": "230.8884017655225",
                    "orbital_period": "342.6980119865149",
                    "perihelion_distance": ".740816926620562",
                    "perihelion_argument": "291.6220138781561",
                    "aphelion_distance": "1.175962331441804",
                    "perihelion_time": "2461052.266185970395",
                    "mean_anomaly": "305.6202653720805",
                    "mean_motion": "1.050487564585481",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "ATE",
                        "orbit_class_description": "Near-Earth asteroid orbits similar to that of 2062 Aten",
                        "orbit_class_range": "a (semi-major axis) < 1.0 AU; q (perihelion) > 0.983 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54553574?"
                },
                "id": "54553574",
                "neo_reference_id": "54553574",
                "name": "(2025 UZ)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54553574",
                "absolute_magnitude_h": 24.0,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0421264611,
                        "estimated_diameter_max": 0.0941976306
                    },
                    "meters": {
                        "estimated_diameter_min": 42.1264610556,
                        "estimated_diameter_max": 94.1976305719
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0261761612,
                        "estimated_diameter_max": 0.0585316759
                    },
                    "feet": {
                        "estimated_diameter_min": 138.2101784897,
                        "estimated_diameter_max": 309.0473542854
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-10-31",
                        "close_approach_date_full": "2025-Oct-31 01:33",
                        "epoch_date_close_approach": 1761874380000,
                        "relative_velocity": {
                            "kilometers_per_second": "13.0085173632",
                            "kilometers_per_hour": "46830.6625075258",
                            "miles_per_hour": "29098.7524897457"
                        },
                        "miss_distance": {
                            "astronomical": "0.1819017013",
                            "lunar": "70.7597618057",
                            "kilometers": "27212107.063856231",
                            "miles": "16908819.2571127478"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "4",
                    "orbit_determination_date": "2025-10-27 07:50:05",
                    "first_observation_date": "2025-10-16",
                    "last_observation_date": "2025-10-27",
                    "data_arc_in_days": 11,
                    "observations_used": 25,
                    "orbit_uncertainty": "8",
                    "minimum_orbit_intersection": ".145142",
                    "jupiter_tisserand_invariant": "3.935",
                    "epoch_osculation": "2460967.5",
                    "eccentricity": ".3593646410142605",
                    "semi_major_axis": "1.773072319379626",
                    "inclination": "23.36079935048042",
                    "ascending_node_longitude": "214.6921541564365",
                    "orbital_period": "862.3590026397887",
                    "perihelion_distance": "1.135892821833444",
                    "perihelion_argument": "188.4273444420338",
                    "aphelion_distance": "2.410251816925807",
                    "perihelion_time": "2460991.543745581483",
                    "mean_anomaly": "349.9627088221523",
                    "mean_motion": ".4174595486311327",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "AMO",
                        "orbit_class_description": "Near-Earth asteroid orbits similar to that of 1221 Amor",
                        "orbit_class_range": "1.017 AU < q (perihelion) < 1.3 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54554703?"
                },
                "id": "54554703",
                "neo_reference_id": "54554703",
                "name": "(2025 UF6)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54554703",
                "absolute_magnitude_h": 25.05,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0259749653,
                        "estimated_diameter_max": 0.0580817882
                    },
                    "meters": {
                        "estimated_diameter_min": 25.974965333,
                        "estimated_diameter_max": 58.0817881978
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0161400902,
                        "estimated_diameter_max": 0.0360903388
                    },
                    "feet": {
                        "estimated_diameter_min": 85.2197052631,
                        "estimated_diameter_max": 190.5570539909
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-10-31",
                        "close_approach_date_full": "2025-Oct-31 04:37",
                        "epoch_date_close_approach": 1761885420000,
                        "relative_velocity": {
                            "kilometers_per_second": "9.194969851",
                            "kilometers_per_hour": "33101.8914637444",
                            "miles_per_hour": "20568.2280597916"
                        },
                        "miss_distance": {
                            "astronomical": "0.0987399125",
                            "lunar": "38.4098259625",
                            "kilometers": "14771280.593986375",
                            "miles": "9178448.150806975"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "4",
                    "orbit_determination_date": "2025-11-10 05:32:03",
                    "first_observation_date": "2025-10-24",
                    "last_observation_date": "2025-11-10",
                    "data_arc_in_days": 17,
                    "observations_used": 33,
                    "orbit_uncertainty": "8",
                    "minimum_orbit_intersection": ".0976149",
                    "jupiter_tisserand_invariant": "4.929",
                    "epoch_osculation": "2460973.5",
                    "eccentricity": ".1647472785207389",
                    "semi_major_axis": "1.305413090997716",
                    "inclination": "17.34340014792293",
                    "ascending_node_longitude": "218.4774686954463",
                    "orbital_period": "544.7790176902645",
                    "perihelion_distance": "1.090349836910497",
                    "perihelion_argument": "179.1868109146905",
                    "aphelion_distance": "1.520476345084936",
                    "perihelion_time": "2460978.794931141981",
                    "mean_anomaly": "356.5010120632126",
                    "mean_motion": ".6608184021593118",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "AMO",
                        "orbit_class_description": "Near-Earth asteroid orbits similar to that of 1221 Amor",
                        "orbit_class_range": "1.017 AU < q (perihelion) < 1.3 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54554643?"
                },
                "id": "54554643",
                "neo_reference_id": "54554643",
                "name": "(2025 UR6)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54554643",
                "absolute_magnitude_h": 20.75,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.1881719895,
                        "estimated_diameter_max": 0.42076536
                    },
                    "meters": {
                        "estimated_diameter_min": 188.1719894893,
                        "estimated_diameter_max": 420.7653599595
                    },
                    "miles": {
                        "estimated_diameter_min": 0.1169246173,
                        "estimated_diameter_max": 0.2614513925
                    },
                    "feet": {
                        "estimated_diameter_min": 617.3621899961,
                        "estimated_diameter_max": 1380.4638235694
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-10-31",
                        "close_approach_date_full": "2025-Oct-31 11:41",
                        "epoch_date_close_approach": 1761910860000,
                        "relative_velocity": {
                            "kilometers_per_second": "23.4701804057",
                            "kilometers_per_hour": "84492.6494605146",
                            "miles_per_hour": "52500.446549507"
                        },
                        "miss_distance": {
                            "astronomical": "0.1584267488",
                            "lunar": "61.6280052832",
                            "kilometers": "23700304.171505056",
                            "miles": "14726686.1266635328"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "8",
                    "orbit_determination_date": "2025-11-14 05:39:09",
                    "first_observation_date": "2025-10-24",
                    "last_observation_date": "2025-11-14",
                    "data_arc_in_days": 21,
                    "observations_used": 82,
                    "orbit_uncertainty": "7",
                    "minimum_orbit_intersection": ".101684",
                    "jupiter_tisserand_invariant": "5.368",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".3070140817850254",
                    "semi_major_axis": "1.088988592988513",
                    "inclination": "47.31874007742639",
                    "ascending_node_longitude": "33.77821509168708",
                    "orbital_period": "415.0815432756823",
                    "perihelion_distance": ".7546537600377778",
                    "perihelion_argument": "110.5435082894641",
                    "aphelion_distance": "1.423323425939248",
                    "perihelion_time": "2461068.840878996821",
                    "mean_anomaly": "300.7279922766515",
                    "mean_motion": ".8672994640017055",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54554754?"
                },
                "id": "54554754",
                "neo_reference_id": "54554754",
                "name": "(2025 UH7)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54554754",
                "absolute_magnitude_h": 28.2,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0060891262,
                        "estimated_diameter_max": 0.0136157002
                    },
                    "meters": {
                        "estimated_diameter_min": 6.0891262211,
                        "estimated_diameter_max": 13.6157001539
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0037836064,
                        "estimated_diameter_max": 0.0084604012
                    },
                    "feet": {
                        "estimated_diameter_min": 19.9774488711,
                        "estimated_diameter_max": 44.6709336928
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-10-31",
                        "close_approach_date_full": "2025-Oct-31 09:10",
                        "epoch_date_close_approach": 1761901800000,
                        "relative_velocity": {
                            "kilometers_per_second": "7.7688173571",
                            "kilometers_per_hour": "27967.7424855607",
                            "miles_per_hour": "17378.0675460974"
                        },
                        "miss_distance": {
                            "astronomical": "0.0056797632",
                            "lunar": "2.2094278848",
                            "kilometers": "849680.476824384",
                            "miles": "527966.9661451392"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "4",
                    "orbit_determination_date": "2025-11-14 05:39:09",
                    "first_observation_date": "2025-10-25",
                    "last_observation_date": "2025-10-30",
                    "data_arc_in_days": 5,
                    "observations_used": 34,
                    "orbit_uncertainty": "6",
                    "minimum_orbit_intersection": ".00418462",
                    "jupiter_tisserand_invariant": "5.456",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".2884159504243889",
                    "semi_major_axis": "1.141381128077896",
                    "inclination": ".8162975453478309",
                    "ascending_node_longitude": "234.4950369046363",
                    "orbital_period": "445.3940983449943",
                    "perihelion_distance": ".8121886052268485",
                    "perihelion_argument": "242.1784375991912",
                    "aphelion_distance": "1.470573650928944",
                    "perihelion_time": "2461039.644330136689",
                    "mean_anomaly": "328.3606969612501",
                    "mean_motion": ".8082729459992763",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54555162?"
                },
                "id": "54555162",
                "neo_reference_id": "54555162",
                "name": "(2025 UN9)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54555162",
                "absolute_magnitude_h": 28.251,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0059477811,
                        "estimated_diameter_max": 0.0132996429
                    },
                    "meters": {
                        "estimated_diameter_min": 5.9477811011,
                        "estimated_diameter_max": 13.2996428574
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0036957787,
                        "estimated_diameter_max": 0.0082640124
                    },
                    "feet": {
                        "estimated_diameter_min": 19.5137181478,
                        "estimated_diameter_max": 43.6340002722
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-10-31",
                        "close_approach_date_full": "2025-Oct-31 16:36",
                        "epoch_date_close_approach": 1761928560000,
                        "relative_velocity": {
                            "kilometers_per_second": "2.4435578453",
                            "kilometers_per_hour": "8796.8082429556",
                            "miles_per_hour": "5465.9945440743"
                        },
                        "miss_distance": {
                            "astronomical": "0.0185433346",
                            "lunar": "7.2133571594",
                            "kilometers": "2774043.358857302",
                            "miles": "1723710.6136706876"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "7",
                    "orbit_determination_date": "2025-11-13 05:20:53",
                    "first_observation_date": "2025-10-29",
                    "last_observation_date": "2025-11-12",
                    "data_arc_in_days": 14,
                    "observations_used": 43,
                    "orbit_uncertainty": "6",
                    "minimum_orbit_intersection": ".0179507",
                    "jupiter_tisserand_invariant": "5.120",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".1921282890912672",
                    "semi_major_axis": "1.251474886797775",
                    "inclination": ".7762466793733921",
                    "ascending_node_longitude": "36.466819090939",
                    "orbital_period": "511.3657485955878",
                    "perihelion_distance": "1.011031157956631",
                    "perihelion_argument": "3.356595549827464",
                    "aphelion_distance": "1.491918615638919",
                    "perihelion_time": "2460981.951725500693",
                    "mean_anomaly": "13.05793131059141",
                    "mean_motion": ".7039970920788146",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54556385?"
                },
                "id": "54556385",
                "neo_reference_id": "54556385",
                "name": "(2025 VD)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54556385",
                "absolute_magnitude_h": 26.477,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0134634071,
                        "estimated_diameter_max": 0.0301050934
                    },
                    "meters": {
                        "estimated_diameter_min": 13.4634070575,
                        "estimated_diameter_max": 30.1050933893
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0083657707,
                        "estimated_diameter_max": 0.018706432
                    },
                    "feet": {
                        "estimated_diameter_min": 44.1712844105,
                        "estimated_diameter_max": 98.7699945954
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-10-31",
                        "close_approach_date_full": "2025-Oct-31 21:49",
                        "epoch_date_close_approach": 1761947340000,
                        "relative_velocity": {
                            "kilometers_per_second": "13.1024172044",
                            "kilometers_per_hour": "47168.7019359318",
                            "miles_per_hour": "29308.7970445794"
                        },
                        "miss_distance": {
                            "astronomical": "0.0019443406",
                            "lunar": "0.7563484934",
                            "kilometers": "290869.212314522",
                            "miles": "180737.7476115236"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "3",
                    "orbit_determination_date": "2025-11-08 05:20:54",
                    "first_observation_date": "2025-11-02",
                    "last_observation_date": "2025-11-08",
                    "data_arc_in_days": 6,
                    "observations_used": 51,
                    "orbit_uncertainty": "7",
                    "minimum_orbit_intersection": ".00151756",
                    "jupiter_tisserand_invariant": "5.520",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".3363005100721841",
                    "semi_major_axis": "1.112643937555861",
                    "inclination": "14.49011520661409",
                    "ascending_node_longitude": "38.05190749322104",
                    "orbital_period": "428.6795200248587",
                    "perihelion_distance": ".7384612138271019",
                    "perihelion_argument": "269.4050459473102",
                    "aphelion_distance": "1.486826661284621",
                    "perihelion_time": "2460917.399913688935",
                    "mean_anomaly": "69.78647141866878",
                    "mean_motion": ".8397881941715433",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54561363?"
                },
                "id": "54561363",
                "neo_reference_id": "54561363",
                "name": "(2025 VL1)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54561363",
                "absolute_magnitude_h": 24.432,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0345266925,
                        "estimated_diameter_max": 0.0772040314
                    },
                    "meters": {
                        "estimated_diameter_min": 34.5266924761,
                        "estimated_diameter_max": 77.2040314148
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0214538854,
                        "estimated_diameter_max": 0.0479723462
                    },
                    "feet": {
                        "estimated_diameter_min": 113.2765537433,
                        "estimated_diameter_max": 253.2940744269
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-10-31",
                        "close_approach_date_full": "2025-Oct-31 18:24",
                        "epoch_date_close_approach": 1761935040000,
                        "relative_velocity": {
                            "kilometers_per_second": "17.7303794323",
                            "kilometers_per_hour": "63829.3659562019",
                            "miles_per_hour": "39661.0857520633"
                        },
                        "miss_distance": {
                            "astronomical": "0.0254910711",
                            "lunar": "9.9160266579",
                            "kilometers": "3813409.940578557",
                            "miles": "2369543.0599038066"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "2",
                    "orbit_determination_date": "2025-11-12 06:10:02",
                    "first_observation_date": "2025-11-01",
                    "last_observation_date": "2025-11-12",
                    "data_arc_in_days": 11,
                    "observations_used": 27,
                    "orbit_uncertainty": "8",
                    "minimum_orbit_intersection": ".014068",
                    "jupiter_tisserand_invariant": "4.806",
                    "epoch_osculation": "2460988.5",
                    "eccentricity": ".5710205751045029",
                    "semi_major_axis": "1.305951224016253",
                    "inclination": "2.730048608224057",
                    "ascending_node_longitude": "236.4230283443224",
                    "orbital_period": "545.1159154010599",
                    "perihelion_distance": ".5602262050200625",
                    "perihelion_argument": "61.28103930642328",
                    "aphelion_distance": "2.051676243012443",
                    "perihelion_time": "2460926.262355120000",
                    "mean_anomaly": "41.10236286224645",
                    "mean_motion": ".6604099968997164",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            }
        ],
        "2025-11-02": [
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/2469219?"
                },
                "id": "2469219",
                "neo_reference_id": "2469219",
                "name": "469219 Kamo\`oalewa (2016 HO3)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=2469219",
                "absolute_magnitude_h": 24.31,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0365220357,
                        "estimated_diameter_max": 0.0816657545
                    },
                    "meters": {
                        "estimated_diameter_min": 36.5220356958,
                        "estimated_diameter_max": 81.6657544926
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0226937338,
                        "estimated_diameter_max": 0.0507447315
                    },
                    "feet": {
                        "estimated_diameter_min": 119.8229555923,
                        "estimated_diameter_max": 267.9322739694
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-02",
                        "close_approach_date_full": "2025-Nov-02 04:13",
                        "epoch_date_close_approach": 1762056780000,
                        "relative_velocity": {
                            "kilometers_per_second": "4.6134711312",
                            "kilometers_per_hour": "16608.4960723778",
                            "miles_per_hour": "10319.8735734172"
                        },
                        "miss_distance": {
                            "astronomical": "0.1198147424",
                            "lunar": "46.6079347936",
                            "kilometers": "17924030.257638688",
                            "miles": "11137475.9504743744"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "35",
                    "orbit_determination_date": "2025-02-20 05:52:49",
                    "first_observation_date": "2004-03-17",
                    "last_observation_date": "2025-01-10",
                    "data_arc_in_days": 7604,
                    "observations_used": 330,
                    "orbit_uncertainty": "0",
                    "minimum_orbit_intersection": ".0292138",
                    "jupiter_tisserand_invariant": "6.063",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".1023678916441888",
                    "semi_major_axis": "1.00097645302749",
                    "inclination": "7.803080175783069",
                    "ascending_node_longitude": "65.65111490971434",
                    "orbital_period": "365.7920132090265",
                    "perihelion_distance": ".8985086039455871",
                    "perihelion_argument": "304.5481133442772",
                    "aphelion_distance": "1.103444302109392",
                    "perihelion_time": "2460953.521444736951",
                    "mean_anomaly": "46.23468879576996",
                    "mean_motion": ".9841658292147653",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3742875?"
                },
                "id": "3742875",
                "neo_reference_id": "3742875",
                "name": "(2016 CD137)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3742875",
                "absolute_magnitude_h": 26.1,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0160160338,
                        "estimated_diameter_max": 0.0358129403
                    },
                    "meters": {
                        "estimated_diameter_min": 16.0160337979,
                        "estimated_diameter_max": 35.8129403019
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0099518989,
                        "estimated_diameter_max": 0.0222531225
                    },
                    "feet": {
                        "estimated_diameter_min": 52.5460443254,
                        "estimated_diameter_max": 117.4965270602
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-02",
                        "close_approach_date_full": "2025-Nov-02 12:14",
                        "epoch_date_close_approach": 1762085640000,
                        "relative_velocity": {
                            "kilometers_per_second": "7.3783076884",
                            "kilometers_per_hour": "26561.9076781347",
                            "miles_per_hour": "16504.5364681165"
                        },
                        "miss_distance": {
                            "astronomical": "0.3521616985",
                            "lunar": "136.9909007165",
                            "kilometers": "52682639.991182195",
                            "miles": "32735474.526396491"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "11",
                    "orbit_determination_date": "2021-04-15 16:16:49",
                    "first_observation_date": "2016-02-08",
                    "last_observation_date": "2016-02-18",
                    "data_arc_in_days": 10,
                    "observations_used": 110,
                    "orbit_uncertainty": "6",
                    "minimum_orbit_intersection": ".00269221",
                    "jupiter_tisserand_invariant": "5.687",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".2339135917223296",
                    "semi_major_axis": "1.083379965105584",
                    "inclination": "4.55031896448726",
                    "ascending_node_longitude": "137.827136903907",
                    "orbital_period": "411.8789783100854",
                    "perihelion_distance": ".8299626662677246",
                    "perihelion_argument": "94.3686431657416",
                    "aphelion_distance": "1.336797263943443",
                    "perihelion_time": "2461206.288404995438",
                    "mean_anomaly": "180.1320540749151",
                    "mean_motion": ".8740431509203463",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3749034?"
                },
                "id": "3749034",
                "neo_reference_id": "3749034",
                "name": "(2016 GN2)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3749034",
                "absolute_magnitude_h": 25.0,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.02658,
                        "estimated_diameter_max": 0.0594346868
                    },
                    "meters": {
                        "estimated_diameter_min": 26.58,
                        "estimated_diameter_max": 59.4346868419
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0165160412,
                        "estimated_diameter_max": 0.0369309908
                    },
                    "feet": {
                        "estimated_diameter_min": 87.2047272,
                        "estimated_diameter_max": 194.9956979785
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-02",
                        "close_approach_date_full": "2025-Nov-02 21:44",
                        "epoch_date_close_approach": 1762119840000,
                        "relative_velocity": {
                            "kilometers_per_second": "7.4226838255",
                            "kilometers_per_hour": "26721.6617718104",
                            "miles_per_hour": "16603.8014492674"
                        },
                        "miss_distance": {
                            "astronomical": "0.168345539",
                            "lunar": "65.486414671",
                            "kilometers": "25184134.05840193",
                            "miles": "15648695.264249434"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "14",
                    "orbit_determination_date": "2021-04-15 16:50:31",
                    "first_observation_date": "2016-04-03",
                    "last_observation_date": "2016-04-29",
                    "data_arc_in_days": 26,
                    "observations_used": 76,
                    "orbit_uncertainty": "5",
                    "minimum_orbit_intersection": ".0490355",
                    "jupiter_tisserand_invariant": "6.368",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".146245716498623",
                    "semi_major_axis": ".9390850886659085",
                    "inclination": "10.382423693489",
                    "ascending_node_longitude": "18.47489113983559",
                    "orbital_period": "332.3960420135562",
                    "perihelion_distance": ".8017479170207897",
                    "perihelion_argument": "334.5935280171767",
                    "aphelion_distance": "1.076422260311027",
                    "perihelion_time": "2460948.083483306669",
                    "mean_anomaly": "56.76946661365341",
                    "mean_motion": "1.083045387120819",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "ATE",
                        "orbit_class_description": "Near-Earth asteroid orbits similar to that of 2062 Aten",
                        "orbit_class_range": "a (semi-major axis) < 1.0 AU; q (perihelion) > 0.983 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3752704?"
                },
                "id": "3752704",
                "neo_reference_id": "3752704",
                "name": "(2016 JG)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3752704",
                "absolute_magnitude_h": 24.4,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0350392641,
                        "estimated_diameter_max": 0.0783501764
                    },
                    "meters": {
                        "estimated_diameter_min": 35.0392641108,
                        "estimated_diameter_max": 78.3501764334
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0217723826,
                        "estimated_diameter_max": 0.0486845275
                    },
                    "feet": {
                        "estimated_diameter_min": 114.9582192654,
                        "estimated_diameter_max": 257.0543928497
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-02",
                        "close_approach_date_full": "2025-Nov-02 16:54",
                        "epoch_date_close_approach": 1762102440000,
                        "relative_velocity": {
                            "kilometers_per_second": "9.8708709535",
                            "kilometers_per_hour": "35535.135432627",
                            "miles_per_hour": "22080.1512359009"
                        },
                        "miss_distance": {
                            "astronomical": "0.3830825395",
                            "lunar": "149.0191078655",
                            "kilometers": "57308331.943390865",
                            "miles": "35609746.223749337"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "6",
                    "orbit_determination_date": "2021-04-15 17:05:26",
                    "first_observation_date": "2016-05-01",
                    "last_observation_date": "2016-06-04",
                    "data_arc_in_days": 34,
                    "observations_used": 18,
                    "orbit_uncertainty": "7",
                    "minimum_orbit_intersection": ".181364",
                    "jupiter_tisserand_invariant": "4.939",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".1780903181571381",
                    "semi_major_axis": "1.299849529516746",
                    "inclination": "17.90160122463493",
                    "ascending_node_longitude": "217.9614852852577",
                    "orbital_period": "541.3000271214739",
                    "perihelion_distance": "1.068358913248702",
                    "perihelion_argument": "80.32333779142547",
                    "aphelion_distance": "1.531340145784789",
                    "perihelion_time": "2460847.199246632144",
                    "mean_anomaly": "101.9550497824807",
                    "mean_motion": ".6650655495334233",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "AMO",
                        "orbit_class_description": "Near-Earth asteroid orbits similar to that of 1221 Amor",
                        "orbit_class_range": "1.017 AU < q (perihelion) < 1.3 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54017405?"
                },
                "id": "54017405",
                "neo_reference_id": "54017405",
                "name": "(2020 LR)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54017405",
                "absolute_magnitude_h": 24.1,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.040230458,
                        "estimated_diameter_max": 0.0899580388
                    },
                    "meters": {
                        "estimated_diameter_min": 40.2304579834,
                        "estimated_diameter_max": 89.9580388169
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0249980399,
                        "estimated_diameter_max": 0.0558973165
                    },
                    "feet": {
                        "estimated_diameter_min": 131.9896957704,
                        "estimated_diameter_max": 295.1379320721
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-02",
                        "close_approach_date_full": "2025-Nov-02 07:28",
                        "epoch_date_close_approach": 1762068480000,
                        "relative_velocity": {
                            "kilometers_per_second": "5.0161406506",
                            "kilometers_per_hour": "18058.1063422312",
                            "miles_per_hour": "11220.6050213714"
                        },
                        "miss_distance": {
                            "astronomical": "0.3997443065",
                            "lunar": "155.5005352285",
                            "kilometers": "59800896.797027155",
                            "miles": "37158554.204618539"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "22",
                    "orbit_determination_date": "2021-04-15 22:35:55",
                    "first_observation_date": "2020-06-11",
                    "last_observation_date": "2020-10-12",
                    "data_arc_in_days": 123,
                    "observations_used": 100,
                    "orbit_uncertainty": "5",
                    "minimum_orbit_intersection": ".0642997",
                    "jupiter_tisserand_invariant": "4.736",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".2549128863439903",
                    "semi_major_axis": "1.392368926269605",
                    "inclination": "3.40508537089447",
                    "ascending_node_longitude": "224.9039786760143",
                    "orbital_period": "600.1086829714191",
                    "perihelion_distance": "1.037436144418538",
                    "perihelion_argument": "88.0552088415532",
                    "aphelion_distance": "1.747301708120673",
                    "perihelion_time": "2460869.777745766800",
                    "mean_anomaly": "78.41914782991641",
                    "mean_motion": ".5998913367116627",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "AMO",
                        "orbit_class_description": "Near-Earth asteroid orbits similar to that of 1221 Amor",
                        "orbit_class_range": "1.017 AU < q (perihelion) < 1.3 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54276987?"
                },
                "id": "54276987",
                "neo_reference_id": "54276987",
                "name": "(2022 HU3)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54276987",
                "absolute_magnitude_h": 26.23,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0150853356,
                        "estimated_diameter_max": 0.0337318359
                    },
                    "meters": {
                        "estimated_diameter_min": 15.0853356118,
                        "estimated_diameter_max": 33.7318358913
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0093735901,
                        "estimated_diameter_max": 0.0209599846
                    },
                    "feet": {
                        "estimated_diameter_min": 49.4925724885,
                        "estimated_diameter_max": 110.6687564656
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-02",
                        "close_approach_date_full": "2025-Nov-02 17:55",
                        "epoch_date_close_approach": 1762106100000,
                        "relative_velocity": {
                            "kilometers_per_second": "24.5612679156",
                            "kilometers_per_hour": "88420.5644963256",
                            "miles_per_hour": "54941.1002005085"
                        },
                        "miss_distance": {
                            "astronomical": "0.3721390697",
                            "lunar": "144.7620981133",
                            "kilometers": "55671212.170901539",
                            "miles": "34592487.1680536782"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "5",
                    "orbit_determination_date": "2022-05-03 05:54:52",
                    "first_observation_date": "2022-04-28",
                    "last_observation_date": "2022-05-03",
                    "data_arc_in_days": 5,
                    "observations_used": 60,
                    "orbit_uncertainty": "7",
                    "minimum_orbit_intersection": ".0158144",
                    "jupiter_tisserand_invariant": "4.699",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".4546418466224997",
                    "semi_major_axis": "1.372542608164176",
                    "inclination": "6.820134128533014",
                    "ascending_node_longitude": "49.80206362436235",
                    "orbital_period": "587.3367553788734",
                    "perihelion_distance": ".7485273022203527",
                    "perihelion_argument": "252.1406863325374",
                    "aphelion_distance": "1.996557914107999",
                    "perihelion_time": "2460931.280539396844",
                    "mean_anomaly": "42.42711798457343",
                    "mean_motion": ".6129362698708934",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54402369?"
                },
                "id": "54402369",
                "neo_reference_id": "54402369",
                "name": "(2023 VS)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54402369",
                "absolute_magnitude_h": 29.84,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0028612445,
                        "estimated_diameter_max": 0.0063979373
                    },
                    "meters": {
                        "estimated_diameter_min": 2.8612445378,
                        "estimated_diameter_max": 6.3979372868
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0017778944,
                        "estimated_diameter_max": 0.0039754927
                    },
                    "feet": {
                        "estimated_diameter_min": 9.3872855295,
                        "estimated_diameter_max": 20.9906085681
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-02",
                        "close_approach_date_full": "2025-Nov-02 01:41",
                        "epoch_date_close_approach": 1762047660000,
                        "relative_velocity": {
                            "kilometers_per_second": "6.2028582077",
                            "kilometers_per_hour": "22330.2895478756",
                            "miles_per_hour": "13875.1735249008"
                        },
                        "miss_distance": {
                            "astronomical": "0.1018183601",
                            "lunar": "39.6073420789",
                            "kilometers": "15231809.797852987",
                            "miles": "9464607.7286937406"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "3",
                    "orbit_determination_date": "2023-11-07 05:23:03",
                    "first_observation_date": "2023-11-03",
                    "last_observation_date": "2023-11-06",
                    "data_arc_in_days": 3,
                    "observations_used": 22,
                    "orbit_uncertainty": "5",
                    "minimum_orbit_intersection": ".00129258",
                    "jupiter_tisserand_invariant": "6.109",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".1189894508540734",
                    "semi_major_axis": ".9927526579625855",
                    "inclination": ".113506521093024",
                    "ascending_node_longitude": "108.887841364675",
                    "orbital_period": "361.2933888082082",
                    "perihelion_distance": ".8746255643576957",
                    "perihelion_argument": "30.43944441239478",
                    "aphelion_distance": "1.110879751567475",
                    "perihelion_time": "2461062.107077841900",
                    "mean_anomaly": "298.6134684162254",
                    "mean_motion": ".9964201149307639",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "ATE",
                        "orbit_class_description": "Near-Earth asteroid orbits similar to that of 2062 Aten",
                        "orbit_class_range": "a (semi-major axis) < 1.0 AU; q (perihelion) > 0.983 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54432969?"
                },
                "id": "54432969",
                "neo_reference_id": "54432969",
                "name": "(2024 GF1)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54432969",
                "absolute_magnitude_h": 24.51,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0333084924,
                        "estimated_diameter_max": 0.0744800533
                    },
                    "meters": {
                        "estimated_diameter_min": 33.3084924299,
                        "estimated_diameter_max": 74.4800533014
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0206969312,
                        "estimated_diameter_max": 0.0462797452
                    },
                    "feet": {
                        "estimated_diameter_min": 109.2798343039,
                        "estimated_diameter_max": 244.3571380733
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-02",
                        "close_approach_date_full": "2025-Nov-02 08:22",
                        "epoch_date_close_approach": 1762071720000,
                        "relative_velocity": {
                            "kilometers_per_second": "22.4515779982",
                            "kilometers_per_hour": "80825.6807936089",
                            "miles_per_hour": "50221.9348242288"
                        },
                        "miss_distance": {
                            "astronomical": "0.4254471654",
                            "lunar": "165.4989473406",
                            "kilometers": "63645989.741377698",
                            "miles": "39547784.1701723124"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "5",
                    "orbit_determination_date": "2024-04-20 05:48:07",
                    "first_observation_date": "2024-04-04",
                    "last_observation_date": "2024-04-20",
                    "data_arc_in_days": 16,
                    "observations_used": 29,
                    "orbit_uncertainty": "7",
                    "minimum_orbit_intersection": ".0277285",
                    "jupiter_tisserand_invariant": "5.597",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".1855988266151683",
                    "semi_major_axis": "1.088447706813351",
                    "inclination": "24.73877354564191",
                    "ascending_node_longitude": "197.787078497664",
                    "orbital_period": "414.7723334417448",
                    "perihelion_distance": ".886433089596822",
                    "perihelion_argument": "117.2102491188804",
                    "aphelion_distance": "1.290462324029879",
                    "perihelion_time": "2460932.971997307184",
                    "mean_anomaly": "58.61066182426073",
                    "mean_motion": ".8679460296031591",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54494256?"
                },
                "id": "54494256",
                "neo_reference_id": "54494256",
                "name": "(2024 UN)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54494256",
                "absolute_magnitude_h": 26.62,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.012605352,
                        "estimated_diameter_max": 0.0281864239
                    },
                    "meters": {
                        "estimated_diameter_min": 12.6053519682,
                        "estimated_diameter_max": 28.1864238812
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0078326002,
                        "estimated_diameter_max": 0.0175142264
                    },
                    "feet": {
                        "estimated_diameter_min": 41.3561429514,
                        "estimated_diameter_max": 92.4751469265
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-02",
                        "close_approach_date_full": "2025-Nov-02 20:08",
                        "epoch_date_close_approach": 1762114080000,
                        "relative_velocity": {
                            "kilometers_per_second": "21.25568677",
                            "kilometers_per_hour": "76520.4723719442",
                            "miles_per_hour": "47546.8457357783"
                        },
                        "miss_distance": {
                            "astronomical": "0.3569359474",
                            "lunar": "138.8480835386",
                            "kilometers": "53396857.457472038",
                            "miles": "33179268.6809406044"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "4",
                    "orbit_determination_date": "2024-11-17 05:11:28",
                    "first_observation_date": "2024-10-20",
                    "last_observation_date": "2024-10-30",
                    "data_arc_in_days": 10,
                    "observations_used": 70,
                    "orbit_uncertainty": "7",
                    "minimum_orbit_intersection": ".0058705",
                    "jupiter_tisserand_invariant": "5.808",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".1921883455809937",
                    "semi_major_axis": "1.038660072004128",
                    "inclination": "24.48414951007151",
                    "ascending_node_longitude": "27.76190151127917",
                    "orbital_period": "386.6416025272205",
                    "perihelion_distance": ".8390417111446188",
                    "perihelion_argument": "269.4146716632152",
                    "aphelion_distance": "1.238278432863637",
                    "perihelion_time": "2460917.330228182755",
                    "mean_anomaly": "77.43894515877999",
                    "mean_motion": ".931094837303896",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": true,
                "sentry_data": "http://api.nasa.gov/neo/rest/v1/neo/sentry/54494256?"
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54495687?"
                },
                "id": "54495687",
                "neo_reference_id": "54495687",
                "name": "(2024 UW2)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54495687",
                "absolute_magnitude_h": 24.93,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0274507982,
                        "estimated_diameter_max": 0.0613818507
                    },
                    "meters": {
                        "estimated_diameter_min": 27.4507981651,
                        "estimated_diameter_max": 61.3818507339
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0170571299,
                        "estimated_diameter_max": 0.038140902
                    },
                    "feet": {
                        "estimated_diameter_min": 90.0616766521,
                        "estimated_diameter_max": 201.3840311617
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-02",
                        "close_approach_date_full": "2025-Nov-02 05:33",
                        "epoch_date_close_approach": 1762061580000,
                        "relative_velocity": {
                            "kilometers_per_second": "13.2787798117",
                            "kilometers_per_hour": "47803.6073222147",
                            "miles_per_hour": "29703.3025608506"
                        },
                        "miss_distance": {
                            "astronomical": "0.3362414917",
                            "lunar": "130.7979402713",
                            "kilometers": "50301010.963942679",
                            "miles": "31255598.8716158102"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "1",
                    "orbit_determination_date": "2024-10-26 06:27:58",
                    "first_observation_date": "2024-10-24",
                    "last_observation_date": "2024-10-26",
                    "data_arc_in_days": 2,
                    "observations_used": 38,
                    "orbit_uncertainty": "7",
                    "minimum_orbit_intersection": ".057689",
                    "jupiter_tisserand_invariant": "6.198",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".1193947611590687",
                    "semi_major_axis": ".9615306661016955",
                    "inclination": "22.8196873720937",
                    "ascending_node_longitude": "28.0260951197075",
                    "orbital_period": "344.3841351761141",
                    "perihelion_distance": ".8467289418753632",
                    "perihelion_argument": "211.8499766906031",
                    "aphelion_distance": "1.076332390328028",
                    "perihelion_time": "2461158.135740350357",
                    "mean_anomaly": "195.2163740147096",
                    "mean_motion": "1.045344321148534",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "ATE",
                        "orbit_class_description": "Near-Earth asteroid orbits similar to that of 2062 Aten",
                        "orbit_class_range": "a (semi-major axis) < 1.0 AU; q (perihelion) > 0.983 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54528922?"
                },
                "id": "54528922",
                "neo_reference_id": "54528922",
                "name": "(2025 JM)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54528922",
                "absolute_magnitude_h": 25.3,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0231502122,
                        "estimated_diameter_max": 0.0517654482
                    },
                    "meters": {
                        "estimated_diameter_min": 23.150212221,
                        "estimated_diameter_max": 51.7654482198
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0143848705,
                        "estimated_diameter_max": 0.0321655483
                    },
                    "feet": {
                        "estimated_diameter_min": 75.9521422633,
                        "estimated_diameter_max": 169.8341531374
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-02",
                        "close_approach_date_full": "2025-Nov-02 15:25",
                        "epoch_date_close_approach": 1762097100000,
                        "relative_velocity": {
                            "kilometers_per_second": "10.6808362392",
                            "kilometers_per_hour": "38451.010461133",
                            "miles_per_hour": "23891.9625834745"
                        },
                        "miss_distance": {
                            "astronomical": "0.1670381996",
                            "lunar": "64.9778596444",
                            "kilometers": "24988558.868794852",
                            "miles": "15527170.4766068776"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "1",
                    "orbit_determination_date": "2025-05-03 21:12:03",
                    "first_observation_date": "2025-05-02",
                    "last_observation_date": "2025-05-04",
                    "data_arc_in_days": 2,
                    "observations_used": 27,
                    "orbit_uncertainty": "7",
                    "minimum_orbit_intersection": ".0420957",
                    "jupiter_tisserand_invariant": "5.594",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".1173435083439121",
                    "semi_major_axis": "1.097381051708044",
                    "inclination": "20.77209556649133",
                    "ascending_node_longitude": "41.25748701440958",
                    "orbital_period": "419.8891112086534",
                    "perihelion_distance": ".9686105091104898",
                    "perihelion_argument": "256.7663868514453",
                    "aphelion_distance": "1.226151594305598",
                    "perihelion_time": "2460871.703714872667",
                    "mean_anomaly": "110.4259705910759",
                    "mean_motion": ".8573692205633477",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54553166?"
                },
                "id": "54553166",
                "neo_reference_id": "54553166",
                "name": "(2025 TP11)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54553166",
                "absolute_magnitude_h": 25.02,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0263363131,
                        "estimated_diameter_max": 0.0588897864
                    },
                    "meters": {
                        "estimated_diameter_min": 26.3363130952,
                        "estimated_diameter_max": 58.8897863577
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0163646212,
                        "estimated_diameter_max": 0.0365924054
                    },
                    "feet": {
                        "estimated_diameter_min": 86.4052294554,
                        "estimated_diameter_max": 193.2079666738
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-02",
                        "close_approach_date_full": "2025-Nov-02 18:16",
                        "epoch_date_close_approach": 1762107360000,
                        "relative_velocity": {
                            "kilometers_per_second": "8.3719566252",
                            "kilometers_per_hour": "30139.0438506838",
                            "miles_per_hour": "18727.2297748874"
                        },
                        "miss_distance": {
                            "astronomical": "0.0307165534",
                            "lunar": "11.9487392726",
                            "kilometers": "4595130.962381258",
                            "miles": "2855281.9788390404"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "3",
                    "orbit_determination_date": "2025-10-26 07:16:38",
                    "first_observation_date": "2025-10-15",
                    "last_observation_date": "2025-10-26",
                    "data_arc_in_days": 11,
                    "observations_used": 27,
                    "orbit_uncertainty": "8",
                    "minimum_orbit_intersection": ".0155114",
                    "jupiter_tisserand_invariant": "4.478",
                    "epoch_osculation": "2460964.5",
                    "eccentricity": ".4056413035623929",
                    "semi_major_axis": "1.484617877383738",
                    "inclination": "4.503669101443528",
                    "ascending_node_longitude": "226.3644982773083",
                    "orbital_period": "660.72456811008",
                    "perihelion_distance": ".8823955463097655",
                    "perihelion_argument": "220.2388055597084",
                    "aphelion_distance": "2.08684020845771",
                    "perihelion_time": "2461018.518134799795",
                    "mean_anomaly": "330.5678743208376",
                    "mean_motion": ".5448563855128545",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54555755?"
                },
                "id": "54555755",
                "neo_reference_id": "54555755",
                "name": "(2025 UP17)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54555755",
                "absolute_magnitude_h": 25.41,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0220067027,
                        "estimated_diameter_max": 0.0492084832
                    },
                    "meters": {
                        "estimated_diameter_min": 22.0067027115,
                        "estimated_diameter_max": 49.2084832235
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0136743269,
                        "estimated_diameter_max": 0.0305767244
                    },
                    "feet": {
                        "estimated_diameter_min": 72.2004705239,
                        "estimated_diameter_max": 161.4451600989
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-02",
                        "close_approach_date_full": "2025-Nov-02 21:41",
                        "epoch_date_close_approach": 1762119660000,
                        "relative_velocity": {
                            "kilometers_per_second": "3.4897312835",
                            "kilometers_per_hour": "12563.0326207223",
                            "miles_per_hour": "7806.1799081372"
                        },
                        "miss_distance": {
                            "astronomical": "0.1603032049",
                            "lunar": "62.3579467061",
                            "kilometers": "23981018.007213563",
                            "miles": "14901113.6158626494"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "2",
                    "orbit_determination_date": "2025-11-14 05:39:09",
                    "first_observation_date": "2025-10-28",
                    "last_observation_date": "2025-11-14",
                    "data_arc_in_days": 17,
                    "observations_used": 23,
                    "orbit_uncertainty": "8",
                    "minimum_orbit_intersection": ".1597",
                    "jupiter_tisserand_invariant": "3.717",
                    "epoch_osculation": "2460981.5",
                    "eccentricity": ".42652603838924",
                    "semi_major_axis": "2.004389008290684",
                    "inclination": "2.999251248064741",
                    "ascending_node_longitude": "196.5285467369476",
                    "orbital_period": "1036.505105411894",
                    "perihelion_distance": "1.149464905193521",
                    "perihelion_argument": "207.6686779058155",
                    "aphelion_distance": "2.859313111387847",
                    "perihelion_time": "2460987.022580367452",
                    "mean_anomaly": "358.0818918094063",
                    "mean_motion": ".347321009921066",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "AMO",
                        "orbit_class_description": "Near-Earth asteroid orbits similar to that of 1221 Amor",
                        "orbit_class_range": "1.017 AU < q (perihelion) < 1.3 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54561139?"
                },
                "id": "54561139",
                "neo_reference_id": "54561139",
                "name": "(2025 VE1)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54561139",
                "absolute_magnitude_h": 25.019,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0263484442,
                        "estimated_diameter_max": 0.0589169124
                    },
                    "meters": {
                        "estimated_diameter_min": 26.3484442087,
                        "estimated_diameter_max": 58.916912352
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0163721591,
                        "estimated_diameter_max": 0.0366092607
                    },
                    "feet": {
                        "estimated_diameter_min": 86.4450296977,
                        "estimated_diameter_max": 193.2969627211
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-02",
                        "close_approach_date_full": "2025-Nov-02 19:22",
                        "epoch_date_close_approach": 1762111320000,
                        "relative_velocity": {
                            "kilometers_per_second": "7.2827660462",
                            "kilometers_per_hour": "26217.9577663532",
                            "miles_per_hour": "16290.8193687654"
                        },
                        "miss_distance": {
                            "astronomical": "0.0550782666",
                            "lunar": "21.4254457074",
                            "kilometers": "8239591.366652142",
                            "miles": "5119844.6648858796"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "2",
                    "orbit_determination_date": "2025-11-11 05:44:25",
                    "first_observation_date": "2025-11-09",
                    "last_observation_date": "2025-11-11",
                    "data_arc_in_days": 2,
                    "observations_used": 17,
                    "orbit_uncertainty": "7",
                    "minimum_orbit_intersection": ".0345662",
                    "jupiter_tisserand_invariant": "6.697",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".1689383201406636",
                    "semi_major_axis": ".880875639651401",
                    "inclination": "13.11644204773194",
                    "ascending_node_longitude": "44.90291536891495",
                    "orbital_period": "301.9745388183328",
                    "perihelion_distance": ".7320619888358608",
                    "perihelion_argument": "169.0421335665283",
                    "aphelion_distance": "1.029689290466941",
                    "perihelion_time": "2461128.203855740133",
                    "mean_anomaly": "207.7574028381733",
                    "mean_motion": "1.192153488862765",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "ATE",
                        "orbit_class_description": "Near-Earth asteroid orbits similar to that of 2062 Aten",
                        "orbit_class_range": "a (semi-major axis) < 1.0 AU; q (perihelion) > 0.983 AU"
                    }
                },
                "is_sentry_object": false
            }
        ],
        "2025-11-01": [
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3609843?"
                },
                "id": "3609843",
                "neo_reference_id": "3609843",
                "name": "(2012 TP20)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3609843",
                "absolute_magnitude_h": 27.8,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0073207399,
                        "estimated_diameter_max": 0.016369672
                    },
                    "meters": {
                        "estimated_diameter_min": 7.3207398935,
                        "estimated_diameter_max": 16.3696720474
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0045488955,
                        "estimated_diameter_max": 0.0101716395
                    },
                    "feet": {
                        "estimated_diameter_min": 24.0181762721,
                        "estimated_diameter_max": 53.70627484
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-01",
                        "close_approach_date_full": "2025-Nov-01 12:06",
                        "epoch_date_close_approach": 1761998760000,
                        "relative_velocity": {
                            "kilometers_per_second": "20.4824369256",
                            "kilometers_per_hour": "73736.7729320362",
                            "miles_per_hour": "45817.1631587977"
                        },
                        "miss_distance": {
                            "astronomical": "0.4389582748",
                            "lunar": "170.7547688972",
                            "kilometers": "65667222.928954676",
                            "miles": "40803720.2344034888"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "10",
                    "orbit_determination_date": "2021-04-15 06:44:10",
                    "first_observation_date": "2012-10-08",
                    "last_observation_date": "2012-10-16",
                    "data_arc_in_days": 8,
                    "observations_used": 29,
                    "orbit_uncertainty": "7",
                    "minimum_orbit_intersection": ".00375278",
                    "jupiter_tisserand_invariant": "4.728",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".3263657757731067",
                    "semi_major_axis": "1.386990911395857",
                    "inclination": ".6576051631140193",
                    "ascending_node_longitude": "207.7320418945318",
                    "orbital_period": "596.6351693353971",
                    "perihelion_distance": ".9343245466078995",
                    "perihelion_argument": "117.720174902957",
                    "aphelion_distance": "1.839657276183813",
                    "perihelion_time": "2460940.199307572538",
                    "mean_anomaly": "36.3844613753954",
                    "mean_motion": ".6033838072284787",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": true,
                "sentry_data": "http://api.nasa.gov/neo/rest/v1/neo/sentry/3609843?"
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3789618?"
                },
                "id": "3789618",
                "neo_reference_id": "3789618",
                "name": "(2017 WZ12)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3789618",
                "absolute_magnitude_h": 26.9,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0110803882,
                        "estimated_diameter_max": 0.0247765013
                    },
                    "meters": {
                        "estimated_diameter_min": 11.0803882126,
                        "estimated_diameter_max": 24.7765012606
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0068850319,
                        "estimated_diameter_max": 0.0153953994
                    },
                    "feet": {
                        "estimated_diameter_min": 36.3529808636,
                        "estimated_diameter_max": 81.2877363957
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-01",
                        "close_approach_date_full": "2025-Nov-01 00:09",
                        "epoch_date_close_approach": 1761955740000,
                        "relative_velocity": {
                            "kilometers_per_second": "11.385972102",
                            "kilometers_per_hour": "40989.4995672922",
                            "miles_per_hour": "25469.2809950211"
                        },
                        "miss_distance": {
                            "astronomical": "0.2033420648",
                            "lunar": "79.1000632072",
                            "kilometers": "30419539.775481976",
                            "miles": "18901825.5271882288"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "5",
                    "orbit_determination_date": "2021-04-15 20:07:37",
                    "first_observation_date": "2017-11-19",
                    "last_observation_date": "2017-12-08",
                    "data_arc_in_days": 19,
                    "observations_used": 29,
                    "orbit_uncertainty": "7",
                    "minimum_orbit_intersection": ".0307166",
                    "jupiter_tisserand_invariant": "6.809",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".1967541556060538",
                    "semi_major_axis": ".8652503170726102",
                    "inclination": "5.857800258881585",
                    "ascending_node_longitude": "60.23314645760973",
                    "orbital_period": "293.9754592808932",
                    "perihelion_distance": ".6950087215491185",
                    "perihelion_argument": "192.7160971210537",
                    "aphelion_distance": "1.035491912596102",
                    "perihelion_time": "2460885.760504743943",
                    "mean_anomaly": "140.5090696795634",
                    "mean_motion": "1.224592014859378",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "ATE",
                        "orbit_class_description": "Near-Earth asteroid orbits similar to that of 2062 Aten",
                        "orbit_class_range": "a (semi-major axis) < 1.0 AU; q (perihelion) > 0.983 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3892683?"
                },
                "id": "3892683",
                "neo_reference_id": "3892683",
                "name": "(2019 VY2)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3892683",
                "absolute_magnitude_h": 24.3,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0366906138,
                        "estimated_diameter_max": 0.0820427065
                    },
                    "meters": {
                        "estimated_diameter_min": 36.6906137531,
                        "estimated_diameter_max": 82.0427064882
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0227984834,
                        "estimated_diameter_max": 0.0509789586
                    },
                    "feet": {
                        "estimated_diameter_min": 120.3760332259,
                        "estimated_diameter_max": 269.1689931548
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-01",
                        "close_approach_date_full": "2025-Nov-01 21:46",
                        "epoch_date_close_approach": 1762033560000,
                        "relative_velocity": {
                            "kilometers_per_second": "14.1956064885",
                            "kilometers_per_hour": "51104.1833587418",
                            "miles_per_hour": "31754.1521542138"
                        },
                        "miss_distance": {
                            "astronomical": "0.1077552999",
                            "lunar": "41.9168116611",
                            "kilometers": "16119963.346251213",
                            "miles": "10016480.7529762194"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "3",
                    "orbit_determination_date": "2021-04-15 22:07:25",
                    "first_observation_date": "2019-10-26",
                    "last_observation_date": "2019-11-20",
                    "data_arc_in_days": 25,
                    "observations_used": 16,
                    "orbit_uncertainty": "7",
                    "minimum_orbit_intersection": ".0965132",
                    "jupiter_tisserand_invariant": "4.857",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".170329580041393",
                    "semi_major_axis": "1.309203443263408",
                    "inclination": "26.758855915435",
                    "ascending_node_longitude": "219.8136273378227",
                    "orbital_period": "547.1534414300475",
                    "perihelion_distance": "1.086207370583606",
                    "perihelion_argument": "190.6586365358986",
                    "aphelion_distance": "1.53219951594321",
                    "perihelion_time": "2460990.234579528748",
                    "mean_anomaly": "6.754140776291018",
                    "mean_motion": ".6579507186486834",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "AMO",
                        "orbit_class_description": "Near-Earth asteroid orbits similar to that of 1221 Amor",
                        "orbit_class_range": "1.017 AU < q (perihelion) < 1.3 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54099613?"
                },
                "id": "54099613",
                "neo_reference_id": "54099613",
                "name": "(2020 XJ3)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54099613",
                "absolute_magnitude_h": 25.7,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0192555078,
                        "estimated_diameter_max": 0.0430566244
                    },
                    "meters": {
                        "estimated_diameter_min": 19.2555078188,
                        "estimated_diameter_max": 43.0566244241
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0119648141,
                        "estimated_diameter_max": 0.0267541378
                    },
                    "feet": {
                        "estimated_diameter_min": 63.1742402722,
                        "estimated_diameter_max": 141.2618956756
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-01",
                        "close_approach_date_full": "2025-Nov-01 04:59",
                        "epoch_date_close_approach": 1761973140000,
                        "relative_velocity": {
                            "kilometers_per_second": "14.5970008226",
                            "kilometers_per_hour": "52549.2029614921",
                            "miles_per_hour": "32652.031140156"
                        },
                        "miss_distance": {
                            "astronomical": "0.2818136462",
                            "lunar": "109.6255083718",
                            "kilometers": "42158721.208453594",
                            "miles": "26196214.6243198372"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "10",
                    "orbit_determination_date": "2021-04-15 23:19:54",
                    "first_observation_date": "2020-12-09",
                    "last_observation_date": "2020-12-21",
                    "data_arc_in_days": 12,
                    "observations_used": 62,
                    "orbit_uncertainty": "7",
                    "minimum_orbit_intersection": ".0103432",
                    "jupiter_tisserand_invariant": "7.203",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".2652918553886372",
                    "semi_major_axis": ".8070371292454031",
                    "inclination": "5.561362345297663",
                    "ascending_node_longitude": "277.8991058233378",
                    "orbital_period": "264.8126335894061",
                    "perihelion_distance": ".5929367518603706",
                    "perihelion_argument": "326.2105818946069",
                    "aphelion_distance": "1.021137506630435",
                    "perihelion_time": "2460895.698661463122",
                    "mean_anomaly": "142.4723638063821",
                    "mean_motion": "1.359451756966333",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "ATE",
                        "orbit_class_description": "Near-Earth asteroid orbits similar to that of 2062 Aten",
                        "orbit_class_range": "a (semi-major axis) < 1.0 AU; q (perihelion) > 0.983 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54105522?"
                },
                "id": "54105522",
                "neo_reference_id": "54105522",
                "name": "(2021 AA6)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54105522",
                "absolute_magnitude_h": 26.89,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.011131533,
                        "estimated_diameter_max": 0.0248908644
                    },
                    "meters": {
                        "estimated_diameter_min": 11.1315329608,
                        "estimated_diameter_max": 24.8908643942
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0069168118,
                        "estimated_diameter_max": 0.0154664613
                    },
                    "feet": {
                        "estimated_diameter_min": 36.5207785992,
                        "estimated_diameter_max": 81.6629435391
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-01",
                        "close_approach_date_full": "2025-Nov-01 19:00",
                        "epoch_date_close_approach": 1762023600000,
                        "relative_velocity": {
                            "kilometers_per_second": "9.1505537716",
                            "kilometers_per_hour": "32941.9935778902",
                            "miles_per_hour": "20468.8737317729"
                        },
                        "miss_distance": {
                            "astronomical": "0.3425416978",
                            "lunar": "133.2487204442",
                            "kilometers": "51243508.377063686",
                            "miles": "31841239.6076074268"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "7",
                    "orbit_determination_date": "2021-04-15 23:22:54",
                    "first_observation_date": "2021-01-12",
                    "last_observation_date": "2021-01-17",
                    "data_arc_in_days": 5,
                    "observations_used": 39,
                    "orbit_uncertainty": "7",
                    "minimum_orbit_intersection": ".00625191",
                    "jupiter_tisserand_invariant": "6.527",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".392265169116087",
                    "semi_major_axis": ".8993325297480015",
                    "inclination": "14.37909139568883",
                    "ascending_node_longitude": "295.7683100238746",
                    "orbital_period": "311.5149405803135",
                    "perihelion_distance": ".5465557028748034",
                    "perihelion_argument": "307.0416010321326",
                    "aphelion_distance": "1.2521093566212",
                    "perihelion_time": "2460861.981009586619",
                    "mean_anomaly": "160.0784747464162",
                    "mean_motion": "1.155642805861462",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "ATE",
                        "orbit_class_description": "Near-Earth asteroid orbits similar to that of 2062 Aten",
                        "orbit_class_range": "a (semi-major axis) < 1.0 AU; q (perihelion) > 0.983 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54200473?"
                },
                "id": "54200473",
                "neo_reference_id": "54200473",
                "name": "(2021 SG3)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54200473",
                "absolute_magnitude_h": 25.28,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0233644185,
                        "estimated_diameter_max": 0.052244428
                    },
                    "meters": {
                        "estimated_diameter_min": 23.3644184974,
                        "estimated_diameter_max": 52.2444280149
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0145179721,
                        "estimated_diameter_max": 0.0324631725
                    },
                    "feet": {
                        "estimated_diameter_min": 76.6549187829,
                        "estimated_diameter_max": 171.4056092083
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-01",
                        "close_approach_date_full": "2025-Nov-01 05:16",
                        "epoch_date_close_approach": 1761974160000,
                        "relative_velocity": {
                            "kilometers_per_second": "6.639153678",
                            "kilometers_per_hour": "23900.953240782",
                            "miles_per_hour": "14851.122862307"
                        },
                        "miss_distance": {
                            "astronomical": "0.0740905201",
                            "lunar": "28.8212123189",
                            "kilometers": "11083783.994152187",
                            "miles": "6887144.0128547006"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "5",
                    "orbit_determination_date": "2025-11-12 09:42:02",
                    "first_observation_date": "2017-09-15",
                    "last_observation_date": "2025-11-12",
                    "data_arc_in_days": 2980,
                    "observations_used": 57,
                    "orbit_uncertainty": "0",
                    "minimum_orbit_intersection": ".0690453",
                    "jupiter_tisserand_invariant": "3.194",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".5809866494938414",
                    "semi_major_axis": "2.525570397845676",
                    "inclination": "1.686450306568771",
                    "ascending_node_longitude": "154.8344077520198",
                    "orbital_period": "1466.012403329398",
                    "perihelion_distance": "1.058247714340489",
                    "perihelion_argument": "240.0125651902408",
                    "aphelion_distance": "3.992893081350864",
                    "perihelion_time": "2460978.321758549861",
                    "mean_anomaly": "5.446179652994346",
                    "mean_motion": ".2455640888047191",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "AMO",
                        "orbit_class_description": "Near-Earth asteroid orbits similar to that of 1221 Amor",
                        "orbit_class_range": "1.017 AU < q (perihelion) < 1.3 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54214047?"
                },
                "id": "54214047",
                "neo_reference_id": "54214047",
                "name": "(2021 UR5)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54214047",
                "absolute_magnitude_h": 25.06,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0258556212,
                        "estimated_diameter_max": 0.0578149266
                    },
                    "meters": {
                        "estimated_diameter_min": 25.855621208,
                        "estimated_diameter_max": 57.8149266216
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0160659332,
                        "estimated_diameter_max": 0.0359245188
                    },
                    "feet": {
                        "estimated_diameter_min": 84.828156284,
                        "estimated_diameter_max": 189.6815238571
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-01",
                        "close_approach_date_full": "2025-Nov-01 04:06",
                        "epoch_date_close_approach": 1761969960000,
                        "relative_velocity": {
                            "kilometers_per_second": "12.2649690585",
                            "kilometers_per_hour": "44153.888610546",
                            "miles_per_hour": "27435.5092869251"
                        },
                        "miss_distance": {
                            "astronomical": "0.4150789982",
                            "lunar": "161.4657302998",
                            "kilometers": "62094934.012453834",
                            "miles": "38584002.8313535492"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "6",
                    "orbit_determination_date": "2021-12-09 04:57:33",
                    "first_observation_date": "2021-10-29",
                    "last_observation_date": "2021-11-28",
                    "data_arc_in_days": 30,
                    "observations_used": 47,
                    "orbit_uncertainty": "6",
                    "minimum_orbit_intersection": ".0966498",
                    "jupiter_tisserand_invariant": "4.350",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".3086037246381528",
                    "semi_major_axis": "1.569731321667378",
                    "inclination": "7.886386964241768",
                    "ascending_node_longitude": "54.8034085136548",
                    "orbital_period": "718.3505241194847",
                    "perihelion_distance": "1.085306389119655",
                    "perihelion_argument": "1.949678374985979",
                    "aphelion_distance": "2.054156254215102",
                    "perihelion_time": "2460976.269406143292",
                    "mean_anomaly": "12.14311606316019",
                    "mean_motion": ".5011480995872712",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "AMO",
                        "orbit_class_description": "Near-Earth asteroid orbits similar to that of 1221 Amor",
                        "orbit_class_range": "1.017 AU < q (perihelion) < 1.3 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54216371?"
                },
                "id": "54216371",
                "neo_reference_id": "54216371",
                "name": "(2021 VV3)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54216371",
                "absolute_magnitude_h": 23.58,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0511157782,
                        "estimated_diameter_max": 0.1142983547
                    },
                    "meters": {
                        "estimated_diameter_min": 51.1157781544,
                        "estimated_diameter_max": 114.2983546761
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0317618622,
                        "estimated_diameter_max": 0.0710216829
                    },
                    "feet": {
                        "estimated_diameter_min": 167.7026896002,
                        "estimated_diameter_max": 374.9946139556
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-01",
                        "close_approach_date_full": "2025-Nov-01 09:45",
                        "epoch_date_close_approach": 1761990300000,
                        "relative_velocity": {
                            "kilometers_per_second": "19.7412944042",
                            "kilometers_per_hour": "71068.6598551304",
                            "miles_per_hour": "44159.3014527615"
                        },
                        "miss_distance": {
                            "astronomical": "0.1565618184",
                            "lunar": "60.9025473576",
                            "kilometers": "23421314.555966808",
                            "miles": "14553330.0181976304"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "13",
                    "orbit_determination_date": "2022-08-10 06:22:57",
                    "first_observation_date": "2021-11-07",
                    "last_observation_date": "2021-11-26",
                    "data_arc_in_days": 19,
                    "observations_used": 162,
                    "orbit_uncertainty": "7",
                    "minimum_orbit_intersection": ".0167189",
                    "jupiter_tisserand_invariant": "4.988",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".7042773608951625",
                    "semi_major_axis": "1.206355853148826",
                    "inclination": "9.23838535294975",
                    "ascending_node_longitude": "229.951083100924",
                    "orbital_period": "483.9623539677311",
                    "perihelion_distance": ".3567467365927385",
                    "perihelion_argument": "50.61189095599378",
                    "aphelion_distance": "2.055964969704913",
                    "perihelion_time": "2460927.756040268455",
                    "mean_anomaly": "54.1112863193946",
                    "mean_motion": ".7438595110726393",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54347535?"
                },
                "id": "54347535",
                "neo_reference_id": "54347535",
                "name": "(2023 EO)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54347535",
                "absolute_magnitude_h": 23.64,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0497227313,
                        "estimated_diameter_max": 0.1111834072
                    },
                    "meters": {
                        "estimated_diameter_min": 49.7227312909,
                        "estimated_diameter_max": 111.1834071935
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0308962633,
                        "estimated_diameter_max": 0.0690861449
                    },
                    "feet": {
                        "estimated_diameter_min": 163.1323257285,
                        "estimated_diameter_max": 364.7749696566
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-01",
                        "close_approach_date_full": "2025-Nov-01 03:30",
                        "epoch_date_close_approach": 1761967800000,
                        "relative_velocity": {
                            "kilometers_per_second": "21.3408762254",
                            "kilometers_per_hour": "76827.1544113835",
                            "miles_per_hour": "47737.4060285621"
                        },
                        "miss_distance": {
                            "astronomical": "0.3047347794",
                            "lunar": "118.5418291866",
                            "kilometers": "45587673.913159878",
                            "miles": "28326867.0353591964"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "6",
                    "orbit_determination_date": "2023-03-29 06:33:12",
                    "first_observation_date": "2023-03-11",
                    "last_observation_date": "2023-03-28",
                    "data_arc_in_days": 17,
                    "observations_used": 129,
                    "orbit_uncertainty": "8",
                    "minimum_orbit_intersection": ".0320895",
                    "jupiter_tisserand_invariant": "3.593",
                    "epoch_osculation": "2460017.5",
                    "eccentricity": ".5757454446562124",
                    "semi_major_axis": "2.019008730666018",
                    "inclination": "4.54198123896347",
                    "ascending_node_longitude": "7.967550231796147",
                    "orbital_period": "1047.865935339968",
                    "perihelion_distance": ".8565736512639365",
                    "perihelion_argument": "104.2132939727613",
                    "aphelion_distance": "3.181443810068099",
                    "perihelion_time": "2459973.922327749221",
                    "mean_anomaly": "14.97134459780932",
                    "mean_motion": ".3435553994635794",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54432336?"
                },
                "id": "54432336",
                "neo_reference_id": "54432336",
                "name": "(2024 FR4)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54432336",
                "absolute_magnitude_h": 25.86,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0178877195,
                        "estimated_diameter_max": 0.0399981568
                    },
                    "meters": {
                        "estimated_diameter_min": 17.887719524,
                        "estimated_diameter_max": 39.9981568182
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0111149102,
                        "estimated_diameter_max": 0.0248536947
                    },
                    "feet": {
                        "estimated_diameter_min": 58.6867457232,
                        "estimated_diameter_max": 131.2275528154
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-01",
                        "close_approach_date_full": "2025-Nov-01 17:19",
                        "epoch_date_close_approach": 1762017540000,
                        "relative_velocity": {
                            "kilometers_per_second": "14.1619577717",
                            "kilometers_per_hour": "50983.047978205",
                            "miles_per_hour": "31678.8833395685"
                        },
                        "miss_distance": {
                            "astronomical": "0.3668937164",
                            "lunar": "142.7216556796",
                            "kilometers": "54886518.489824068",
                            "miles": "34104901.1242974184"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "1",
                    "orbit_determination_date": "2024-04-04 06:12:02",
                    "first_observation_date": "2024-03-30",
                    "last_observation_date": "2024-04-04",
                    "data_arc_in_days": 5,
                    "observations_used": 15,
                    "orbit_uncertainty": "7",
                    "minimum_orbit_intersection": ".034512",
                    "jupiter_tisserand_invariant": "6.245",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".3441280665396474",
                    "semi_major_axis": ".9537750846966602",
                    "inclination": "10.94444490776991",
                    "ascending_node_longitude": "186.9048988473326",
                    "orbital_period": "340.2259118682408",
                    "perihelion_distance": ".6255543088863101",
                    "perihelion_argument": "231.2500353035165",
                    "aphelion_distance": "1.28199586050701",
                    "perihelion_time": "2460991.601626270208",
                    "mean_anomaly": "9.415551346852835",
                    "mean_motion": "1.058120464791104",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "ATE",
                        "orbit_class_description": "Near-Earth asteroid orbits similar to that of 2062 Aten",
                        "orbit_class_range": "a (semi-major axis) < 1.0 AU; q (perihelion) > 0.983 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54471061?"
                },
                "id": "54471061",
                "neo_reference_id": "54471061",
                "name": "(2024 RT15)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54471061",
                "absolute_magnitude_h": 22.64,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0788052183,
                        "estimated_diameter_max": 0.1762138252
                    },
                    "meters": {
                        "estimated_diameter_min": 78.8052183336,
                        "estimated_diameter_max": 176.2138251755
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0489672773,
                        "estimated_diameter_max": 0.1094941608
                    },
                    "feet": {
                        "estimated_diameter_min": 258.5473125175,
                        "estimated_diameter_max": 578.1293661889
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-01",
                        "close_approach_date_full": "2025-Nov-01 15:50",
                        "epoch_date_close_approach": 1762012200000,
                        "relative_velocity": {
                            "kilometers_per_second": "16.4825303692",
                            "kilometers_per_hour": "59337.1093292122",
                            "miles_per_hour": "36869.7721829207"
                        },
                        "miss_distance": {
                            "astronomical": "0.355125993",
                            "lunar": "138.144011277",
                            "kilometers": "53126092.13443491",
                            "miles": "33011022.910865358"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "9",
                    "orbit_determination_date": "2024-10-21 06:19:26",
                    "first_observation_date": "2024-09-04",
                    "last_observation_date": "2024-10-20",
                    "data_arc_in_days": 46,
                    "observations_used": 55,
                    "orbit_uncertainty": "3",
                    "minimum_orbit_intersection": ".172524",
                    "jupiter_tisserand_invariant": "6.351",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".2624998012708404",
                    "semi_major_axis": ".9368361154624401",
                    "inclination": "13.39745478580071",
                    "ascending_node_longitude": "352.4458373876392",
                    "orbital_period": "331.2026964053917",
                    "perihelion_distance": ".6909168213302035",
                    "perihelion_argument": "178.4895371220289",
                    "aphelion_distance": "1.182755409594677",
                    "perihelion_time": "2461059.026691315265",
                    "mean_anomaly": "296.3845490928421",
                    "mean_motion": "1.086947672549623",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "ATE",
                        "orbit_class_description": "Near-Earth asteroid orbits similar to that of 2062 Aten",
                        "orbit_class_range": "a (semi-major axis) < 1.0 AU; q (perihelion) > 0.983 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54554632?"
                },
                "id": "54554632",
                "neo_reference_id": "54554632",
                "name": "(2025 UD6)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54554632",
                "absolute_magnitude_h": 23.86,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.04493192,
                        "estimated_diameter_max": 0.1004708274
                    },
                    "meters": {
                        "estimated_diameter_min": 44.9319199631,
                        "estimated_diameter_max": 100.470827397
                    },
                    "miles": {
                        "estimated_diameter_min": 0.027919392,
                        "estimated_diameter_max": 0.0624296585
                    },
                    "feet": {
                        "estimated_diameter_min": 147.4144402917,
                        "estimated_diameter_max": 329.6287093572
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-01",
                        "close_approach_date_full": "2025-Nov-01 15:44",
                        "epoch_date_close_approach": 1762011840000,
                        "relative_velocity": {
                            "kilometers_per_second": "21.2354131736",
                            "kilometers_per_hour": "76447.4874250658",
                            "miles_per_hour": "47501.4957280916"
                        },
                        "miss_distance": {
                            "astronomical": "0.0907315816",
                            "lunar": "35.2945852424",
                            "kilometers": "13573251.349091192",
                            "miles": "8434027.2972827696"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "7",
                    "orbit_determination_date": "2025-11-12 06:10:02",
                    "first_observation_date": "2025-10-22",
                    "last_observation_date": "2025-11-02",
                    "data_arc_in_days": 11,
                    "observations_used": 44,
                    "orbit_uncertainty": "8",
                    "minimum_orbit_intersection": ".088394",
                    "jupiter_tisserand_invariant": "4.745",
                    "epoch_osculation": "2460973.5",
                    "eccentricity": ".3315584018089268",
                    "semi_major_axis": "1.298183439668984",
                    "inclination": "38.54125399046328",
                    "ascending_node_longitude": "215.9585775920092",
                    "orbital_period": "540.2596388978257",
                    "perihelion_distance": ".8677598131575199",
                    "perihelion_argument": "259.8817441584596",
                    "aphelion_distance": "1.728607066180447",
                    "perihelion_time": "2461045.113807518446",
                    "mean_anomaly": "312.2804058447974",
                    "mean_motion": ".6663462788640472",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54554761?"
                },
                "id": "54554761",
                "neo_reference_id": "54554761",
                "name": "(2025 UO7)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54554761",
                "absolute_magnitude_h": 26.66,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0123752784,
                        "estimated_diameter_max": 0.0276719637
                    },
                    "meters": {
                        "estimated_diameter_min": 12.3752783658,
                        "estimated_diameter_max": 27.6719636665
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0076896391,
                        "estimated_diameter_max": 0.0171945557
                    },
                    "feet": {
                        "estimated_diameter_min": 40.6013082738,
                        "estimated_diameter_max": 90.7872852756
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-01",
                        "close_approach_date_full": "2025-Nov-01 23:40",
                        "epoch_date_close_approach": 1762040400000,
                        "relative_velocity": {
                            "kilometers_per_second": "7.6493005313",
                            "kilometers_per_hour": "27537.4819127724",
                            "miles_per_hour": "17110.7203585224"
                        },
                        "miss_distance": {
                            "astronomical": "0.0204549254",
                            "lunar": "7.9569659806",
                            "kilometers": "3060013.270848898",
                            "miles": "1901404.0772268724"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "5",
                    "orbit_determination_date": "2025-11-02 05:20:28",
                    "first_observation_date": "2025-10-27",
                    "last_observation_date": "2025-10-31",
                    "data_arc_in_days": 4,
                    "observations_used": 41,
                    "orbit_uncertainty": "7",
                    "minimum_orbit_intersection": ".0201989",
                    "jupiter_tisserand_invariant": "3.851",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".4577896779500875",
                    "semi_major_axis": "1.858234925760992",
                    "inclination": "8.670489793733244",
                    "ascending_node_longitude": "216.8618922911802",
                    "orbital_period": "925.2292511031352",
                    "perihelion_distance": "1.007554157541263",
                    "perihelion_argument": "191.7361526957305",
                    "aphelion_distance": "2.708915693980722",
                    "perihelion_time": "2460989.348297962449",
                    "mean_anomaly": "4.339046488999002",
                    "mean_motion": ".3890927568175975",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54554907?"
                },
                "id": "54554907",
                "neo_reference_id": "54554907",
                "name": "(2025 UB8)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54554907",
                "absolute_magnitude_h": 24.95,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0271991277,
                        "estimated_diameter_max": 0.0608190985
                    },
                    "meters": {
                        "estimated_diameter_min": 27.1991277348,
                        "estimated_diameter_max": 60.8190985438
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0169007492,
                        "estimated_diameter_max": 0.0377912241
                    },
                    "feet": {
                        "estimated_diameter_min": 89.2359862375,
                        "estimated_diameter_max": 199.5377312663
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-01",
                        "close_approach_date_full": "2025-Nov-01 22:04",
                        "epoch_date_close_approach": 1762034640000,
                        "relative_velocity": {
                            "kilometers_per_second": "16.1120725422",
                            "kilometers_per_hour": "58003.4611520014",
                            "miles_per_hour": "36041.0950696977"
                        },
                        "miss_distance": {
                            "astronomical": "0.0609616896",
                            "lunar": "23.7140972544",
                            "kilometers": "9119738.915761152",
                            "miles": "5666742.9918898176"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "4",
                    "orbit_determination_date": "2025-11-01 06:20:02",
                    "first_observation_date": "2025-10-27",
                    "last_observation_date": "2025-10-30",
                    "data_arc_in_days": 3,
                    "observations_used": 55,
                    "orbit_uncertainty": "8",
                    "minimum_orbit_intersection": ".0153491",
                    "jupiter_tisserand_invariant": "5.165",
                    "epoch_osculation": "2460976.5",
                    "eccentricity": ".3770862070242002",
                    "semi_major_axis": "1.19279979344071",
                    "inclination": "25.20408073330859",
                    "ascending_node_longitude": "214.3256835805065",
                    "orbital_period": "475.8277428602789",
                    "perihelion_distance": ".7430114435929031",
                    "perihelion_argument": "275.6638561172242",
                    "aphelion_distance": "1.642588143288517",
                    "perihelion_time": "2461046.799281063185",
                    "mean_anomaly": "306.8132290256604",
                    "mean_motion": ".7565763144367764",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54555169?"
                },
                "id": "54555169",
                "neo_reference_id": "54555169",
                "name": "(2025 UU9)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54555169",
                "absolute_magnitude_h": 27.069,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0102507343,
                        "estimated_diameter_max": 0.0229213387
                    },
                    "meters": {
                        "estimated_diameter_min": 10.2507342976,
                        "estimated_diameter_max": 22.9213387086
                    },
                    "miles": {
                        "estimated_diameter_min": 0.006369509,
                        "estimated_diameter_max": 0.0142426552
                    },
                    "feet": {
                        "estimated_diameter_min": 33.6310191128,
                        "estimated_diameter_max": 75.2012448888
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-01",
                        "close_approach_date_full": "2025-Nov-01 23:51",
                        "epoch_date_close_approach": 1762041060000,
                        "relative_velocity": {
                            "kilometers_per_second": "4.4081718845",
                            "kilometers_per_hour": "15869.4187841903",
                            "miles_per_hour": "9860.639688432"
                        },
                        "miss_distance": {
                            "astronomical": "0.0379809907",
                            "lunar": "14.7746053823",
                            "kilometers": "5681875.309209809",
                            "miles": "3530553.6031970042"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "4",
                    "orbit_determination_date": "2025-11-08 05:20:53",
                    "first_observation_date": "2025-10-28",
                    "last_observation_date": "2025-11-08",
                    "data_arc_in_days": 11,
                    "observations_used": 33,
                    "orbit_uncertainty": "6",
                    "minimum_orbit_intersection": ".0372318",
                    "jupiter_tisserand_invariant": "6.529",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".1449749129128322",
                    "semi_major_axis": ".9118739511304703",
                    "inclination": "6.590131615114092",
                    "ascending_node_longitude": "213.190038196538",
                    "orbital_period": "318.0538385714255",
                    "perihelion_distance": ".7796751044778502",
                    "perihelion_argument": "341.4187897743504",
                    "aphelion_distance": "1.04407279778309",
                    "perihelion_time": "2461111.929854277778",
                    "mean_anomaly": "233.8743486946111",
                    "mean_motion": "1.131883839594518",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "ATE",
                        "orbit_class_description": "Near-Earth asteroid orbits similar to that of 2062 Aten",
                        "orbit_class_range": "a (semi-major axis) < 1.0 AU; q (perihelion) > 0.983 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54556386?"
                },
                "id": "54556386",
                "neo_reference_id": "54556386",
                "name": "(2025 VE)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54556386",
                "absolute_magnitude_h": 27.57,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0081386988,
                        "estimated_diameter_max": 0.0181986838
                    },
                    "meters": {
                        "estimated_diameter_min": 8.1386988067,
                        "estimated_diameter_max": 18.1986837803
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0050571514,
                        "estimated_diameter_max": 0.0113081343
                    },
                    "feet": {
                        "estimated_diameter_min": 26.7017685931,
                        "estimated_diameter_max": 59.7069696937
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-01",
                        "close_approach_date_full": "2025-Nov-01 09:45",
                        "epoch_date_close_approach": 1761990300000,
                        "relative_velocity": {
                            "kilometers_per_second": "6.6852588381",
                            "kilometers_per_hour": "24066.9318172056",
                            "miles_per_hour": "14954.2554949742"
                        },
                        "miss_distance": {
                            "astronomical": "0.0107833064",
                            "lunar": "4.1947061896",
                            "kilometers": "1613159.668997368",
                            "miles": "1002370.9377569584"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "3",
                    "orbit_determination_date": "2025-11-06 14:49:22",
                    "first_observation_date": "2025-11-02",
                    "last_observation_date": "2025-11-04",
                    "data_arc_in_days": 2,
                    "observations_used": 34,
                    "orbit_uncertainty": "7",
                    "minimum_orbit_intersection": ".00360976",
                    "jupiter_tisserand_invariant": "3.796",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".477081139348341",
                    "semi_major_axis": "1.904395318463588",
                    "inclination": ".4282969208223071",
                    "ascending_node_longitude": "172.634079610731",
                    "orbital_period": "959.9178876784505",
                    "perihelion_distance": ".9958442301613326",
                    "perihelion_argument": "215.6782962366325",
                    "aphelion_distance": "2.812946406765843",
                    "perihelion_time": "2460972.302427533849",
                    "mean_anomaly": "10.57499419285189",
                    "mean_motion": ".3750320778693431",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54561515?"
                },
                "id": "54561515",
                "neo_reference_id": "54561515",
                "name": "(2025 VV2)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54561515",
                "absolute_magnitude_h": 25.43,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.021804944,
                        "estimated_diameter_max": 0.0487573371
                    },
                    "meters": {
                        "estimated_diameter_min": 21.8049440483,
                        "estimated_diameter_max": 48.7573371375
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0135489599,
                        "estimated_diameter_max": 0.0302963953
                    },
                    "feet": {
                        "estimated_diameter_min": 71.5385326314,
                        "estimated_diameter_max": 159.9650219744
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-01",
                        "close_approach_date_full": "2025-Nov-01 08:29",
                        "epoch_date_close_approach": 1761985740000,
                        "relative_velocity": {
                            "kilometers_per_second": "9.4026628075",
                            "kilometers_per_hour": "33849.5861071693",
                            "miles_per_hour": "21032.816434202"
                        },
                        "miss_distance": {
                            "astronomical": "0.019376243",
                            "lunar": "7.537358527",
                            "kilometers": "2898644.68140241",
                            "miles": "1801134.285316858"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "1",
                    "orbit_determination_date": "2025-11-13 04:12:03",
                    "first_observation_date": "2025-10-31",
                    "last_observation_date": "2025-11-13",
                    "data_arc_in_days": 13,
                    "observations_used": 30,
                    "orbit_uncertainty": "8",
                    "minimum_orbit_intersection": ".00858102",
                    "jupiter_tisserand_invariant": "7.745",
                    "epoch_osculation": "2460990.5",
                    "eccentricity": ".4162688936973826",
                    "semi_major_axis": ".7362863654921966",
                    "inclination": "7.550677819601088",
                    "ascending_node_longitude": "33.67006629803409",
                    "orbital_period": "230.7642688890874",
                    "perihelion_distance": ".4297932546842932",
                    "perihelion_argument": "205.8610242571236",
                    "aphelion_distance": "1.0427794763001",
                    "perihelion_time": "2460892.941924437957",
                    "mean_anomaly": "152.1938702703394",
                    "mean_motion": "1.560033543030994",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "ATE",
                        "orbit_class_description": "Near-Earth asteroid orbits similar to that of 2062 Aten",
                        "orbit_class_range": "a (semi-major axis) < 1.0 AU; q (perihelion) > 0.983 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54561511?"
                },
                "id": "54561511",
                "neo_reference_id": "54561511",
                "name": "(2025 VZ2)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54561511",
                "absolute_magnitude_h": 24.372,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0354940026,
                        "estimated_diameter_max": 0.0793670026
                    },
                    "meters": {
                        "estimated_diameter_min": 35.4940025858,
                        "estimated_diameter_max": 79.3670025755
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0220549439,
                        "estimated_diameter_max": 0.0493163538
                    },
                    "feet": {
                        "estimated_diameter_min": 116.4501434437,
                        "estimated_diameter_max": 260.3904367298
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-01",
                        "close_approach_date_full": "2025-Nov-01 14:08",
                        "epoch_date_close_approach": 1762006080000,
                        "relative_velocity": {
                            "kilometers_per_second": "12.246466626",
                            "kilometers_per_hour": "44087.2798537627",
                            "miles_per_hour": "27394.1211958005"
                        },
                        "miss_distance": {
                            "astronomical": "0.1614689876",
                            "lunar": "62.8114361764",
                            "kilometers": "24155416.616016412",
                            "miles": "15009479.8863620056"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "1",
                    "orbit_determination_date": "2025-11-13 04:12:03",
                    "first_observation_date": "2025-11-10",
                    "last_observation_date": "2025-11-13",
                    "data_arc_in_days": 3,
                    "observations_used": 17,
                    "orbit_uncertainty": "9",
                    "minimum_orbit_intersection": ".158227",
                    "jupiter_tisserand_invariant": "5.183",
                    "epoch_osculation": "2460990.5",
                    "eccentricity": ".1576973189644213",
                    "semi_major_axis": "1.208381661337785",
                    "inclination": "22.91180845717623",
                    "ascending_node_longitude": "226.737295290195",
                    "orbital_period": "485.1819274207424",
                    "perihelion_distance": "1.017823113059043",
                    "perihelion_argument": "94.3524994125973",
                    "aphelion_distance": "1.398940209616527",
                    "perihelion_time": "2460897.918852941449",
                    "mean_anomaly": "68.69425891079362",
                    "mean_motion": ".7419897148968071",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "AMO",
                        "orbit_class_description": "Near-Earth asteroid orbits similar to that of 1221 Amor",
                        "orbit_class_range": "1.017 AU < q (perihelion) < 1.3 AU"
                    }
                },
                "is_sentry_object": false
            }
        ],
        "2025-11-07": [
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/2164206?"
                },
                "id": "2164206",
                "neo_reference_id": "2164206",
                "name": "164206 (2004 FN18)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=2164206",
                "absolute_magnitude_h": 17.67,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.777239702,
                        "estimated_diameter_max": 1.7379608086
                    },
                    "meters": {
                        "estimated_diameter_min": 777.2397020308,
                        "estimated_diameter_max": 1737.9608085525
                    },
                    "miles": {
                        "estimated_diameter_min": 0.4829542109,
                        "estimated_diameter_max": 1.0799184456
                    },
                    "feet": {
                        "estimated_diameter_min": 2549.9991040106,
                        "estimated_diameter_max": 5701.9713391312
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-07",
                        "close_approach_date_full": "2025-Nov-07 16:57",
                        "epoch_date_close_approach": 1762534620000,
                        "relative_velocity": {
                            "kilometers_per_second": "11.9161033916",
                            "kilometers_per_hour": "42897.9722098468",
                            "miles_per_hour": "26655.1316767239"
                        },
                        "miss_distance": {
                            "astronomical": "0.1122764825",
                            "lunar": "43.6755516925",
                            "kilometers": "16796322.633092275",
                            "miles": "10436750.925632395"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "190",
                    "orbit_determination_date": "2025-11-13 05:21:18",
                    "first_observation_date": "1954-10-05",
                    "last_observation_date": "2025-11-12",
                    "data_arc_in_days": 25971,
                    "observations_used": 1195,
                    "orbit_uncertainty": "0",
                    "minimum_orbit_intersection": ".112122",
                    "jupiter_tisserand_invariant": "4.050",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".4097305454832301",
                    "semi_major_axis": "1.700824830222671",
                    "inclination": "18.27357811706276",
                    "ascending_node_longitude": "214.4061379521122",
                    "orbital_period": "810.1917341692655",
                    "perihelion_distance": "1.003944944764114",
                    "perihelion_argument": "232.8930062757514",
                    "aphelion_distance": "2.397704715681228",
                    "perihelion_time": "2461025.016200299042",
                    "mean_anomaly": "349.1064895685408",
                    "mean_motion": ".4443392654075",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3261401?"
                },
                "id": "3261401",
                "neo_reference_id": "3261401",
                "name": "(2004 VZ)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3261401",
                "absolute_magnitude_h": 24.6,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0319561887,
                        "estimated_diameter_max": 0.0714562102
                    },
                    "meters": {
                        "estimated_diameter_min": 31.9561886721,
                        "estimated_diameter_max": 71.4562101727
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0198566489,
                        "estimated_diameter_max": 0.0444008168
                    },
                    "feet": {
                        "estimated_diameter_min": 104.8431420431,
                        "estimated_diameter_max": 234.436392583
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-07",
                        "close_approach_date_full": "2025-Nov-07 04:49",
                        "epoch_date_close_approach": 1762490940000,
                        "relative_velocity": {
                            "kilometers_per_second": "12.2237645562",
                            "kilometers_per_hour": "44005.5524023294",
                            "miles_per_hour": "27343.3389357696"
                        },
                        "miss_distance": {
                            "astronomical": "0.0754932177",
                            "lunar": "29.3668616853",
                            "kilometers": "11293624.567366299",
                            "miles": "7017532.8988369662"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "10",
                    "orbit_determination_date": "2021-04-14 22:27:00",
                    "first_observation_date": "2004-11-03",
                    "last_observation_date": "2004-11-06",
                    "data_arc_in_days": 3,
                    "observations_used": 46,
                    "orbit_uncertainty": "7",
                    "minimum_orbit_intersection": ".00362491",
                    "jupiter_tisserand_invariant": "6.325",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".2442125032200225",
                    "semi_major_axis": ".9404324928856339",
                    "inclination": "16.22802588234472",
                    "ascending_node_longitude": "225.7036551067567",
                    "orbital_period": "333.1116839434304",
                    "perihelion_distance": ".7107671196885872",
                    "perihelion_argument": "297.2359436553349",
                    "aphelion_distance": "1.17009786608268",
                    "perihelion_time": "2461066.740332233337",
                    "mean_anomaly": "288.4128394366052",
                    "mean_motion": "1.080718621869582",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "ATE",
                        "orbit_class_description": "Near-Earth asteroid orbits similar to that of 2062 Aten",
                        "orbit_class_range": "a (semi-major axis) < 1.0 AU; q (perihelion) > 0.983 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3393817?"
                },
                "id": "3393817",
                "neo_reference_id": "3393817",
                "name": "(2007 VU83)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3393817",
                "absolute_magnitude_h": 25.3,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0231502122,
                        "estimated_diameter_max": 0.0517654482
                    },
                    "meters": {
                        "estimated_diameter_min": 23.150212221,
                        "estimated_diameter_max": 51.7654482198
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0143848705,
                        "estimated_diameter_max": 0.0321655483
                    },
                    "feet": {
                        "estimated_diameter_min": 75.9521422633,
                        "estimated_diameter_max": 169.8341531374
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-07",
                        "close_approach_date_full": "2025-Nov-07 12:57",
                        "epoch_date_close_approach": 1762520220000,
                        "relative_velocity": {
                            "kilometers_per_second": "9.9713894414",
                            "kilometers_per_hour": "35897.0019891715",
                            "miles_per_hour": "22305.0010415494"
                        },
                        "miss_distance": {
                            "astronomical": "0.0344851408",
                            "lunar": "13.4147197712",
                            "kilometers": "5158903.610330096",
                            "miles": "3205594.0580874848"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "14",
                    "orbit_determination_date": "2025-11-14 05:38:57",
                    "first_observation_date": "2007-11-07",
                    "last_observation_date": "2025-11-13",
                    "data_arc_in_days": 6581,
                    "observations_used": 66,
                    "orbit_uncertainty": "0",
                    "minimum_orbit_intersection": ".00960225",
                    "jupiter_tisserand_invariant": "3.300",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".5868737144564695",
                    "semi_major_axis": "2.352697689326273",
                    "inclination": ".6042930032110064",
                    "ascending_node_longitude": "107.0314171284398",
                    "orbital_period": "1318.09774120668",
                    "perihelion_distance": ".9719612573982103",
                    "perihelion_argument": "269.6462868887021",
                    "aphelion_distance": "3.733434121254336",
                    "perihelion_time": "2460965.709672963432",
                    "mean_anomaly": "9.501964339684429",
                    "mean_motion": ".2731208686166403",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3759000?"
                },
                "id": "3759000",
                "neo_reference_id": "3759000",
                "name": "(2016 RG17)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3759000",
                "absolute_magnitude_h": 23.0,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0667659413,
                        "estimated_diameter_max": 0.1492931834
                    },
                    "meters": {
                        "estimated_diameter_min": 66.7659413495,
                        "estimated_diameter_max": 149.2931834393
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0414864197,
                        "estimated_diameter_max": 0.0927664547
                    },
                    "feet": {
                        "estimated_diameter_min": 219.0483710172,
                        "estimated_diameter_max": 489.807047955
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-07",
                        "close_approach_date_full": "2025-Nov-07 15:38",
                        "epoch_date_close_approach": 1762529880000,
                        "relative_velocity": {
                            "kilometers_per_second": "27.1475530179",
                            "kilometers_per_hour": "97731.1908642614",
                            "miles_per_hour": "60726.3613456296"
                        },
                        "miss_distance": {
                            "astronomical": "0.483939334",
                            "lunar": "188.252400926",
                            "kilometers": "72396293.57561858",
                            "miles": "44984970.847073204"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "12",
                    "orbit_determination_date": "2021-04-15 17:39:26",
                    "first_observation_date": "2016-09-04",
                    "last_observation_date": "2016-10-06",
                    "data_arc_in_days": 32,
                    "observations_used": 60,
                    "orbit_uncertainty": "6",
                    "minimum_orbit_intersection": ".0433913",
                    "jupiter_tisserand_invariant": "7.014",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".5693174798035593",
                    "semi_major_axis": ".811503670141517",
                    "inclination": "21.98046075128071",
                    "ascending_node_longitude": "170.0909633298032",
                    "orbital_period": "267.0140778344337",
                    "perihelion_distance": ".3495004458052097",
                    "perihelion_argument": "29.14334213466109",
                    "aphelion_distance": "1.273506894477825",
                    "perihelion_time": "2461037.666145308681",
                    "mean_anomaly": "309.8909854505064",
                    "mean_motion": "1.348243519291981",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "ATE",
                        "orbit_class_description": "Near-Earth asteroid orbits similar to that of 2062 Aten",
                        "orbit_class_range": "a (semi-major axis) < 1.0 AU; q (perihelion) > 0.983 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3759693?"
                },
                "id": "3759693",
                "neo_reference_id": "3759693",
                "name": "(2016 RQ41)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3759693",
                "absolute_magnitude_h": 20.15,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.2480589932,
                        "estimated_diameter_max": 0.5546767711
                    },
                    "meters": {
                        "estimated_diameter_min": 248.0589931518,
                        "estimated_diameter_max": 554.6767711177
                    },
                    "miles": {
                        "estimated_diameter_min": 0.1541366646,
                        "estimated_diameter_max": 0.3446600599
                    },
                    "feet": {
                        "estimated_diameter_min": 813.8418670923,
                        "estimated_diameter_max": 1819.8057377537
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-07",
                        "close_approach_date_full": "2025-Nov-07 22:13",
                        "epoch_date_close_approach": 1762553580000,
                        "relative_velocity": {
                            "kilometers_per_second": "18.3772951521",
                            "kilometers_per_hour": "66158.2625476774",
                            "miles_per_hour": "41108.1715258054"
                        },
                        "miss_distance": {
                            "astronomical": "0.1728273218",
                            "lunar": "67.2298281802",
                            "kilometers": "25854599.219084566",
                            "miles": "16065302.9967403708"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "24",
                    "orbit_determination_date": "2025-11-01 06:19:51",
                    "first_observation_date": "2016-09-12",
                    "last_observation_date": "2025-10-31",
                    "data_arc_in_days": 3336,
                    "observations_used": 119,
                    "orbit_uncertainty": "0",
                    "minimum_orbit_intersection": ".146701",
                    "jupiter_tisserand_invariant": "3.405",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".681462319287663",
                    "semi_major_axis": "2.087429390853783",
                    "inclination": "10.22061278205858",
                    "ascending_node_longitude": "146.3012836071635",
                    "orbital_period": "1101.580191508536",
                    "perihelion_distance": ".6649249168133304",
                    "perihelion_argument": "337.4997951257394",
                    "aphelion_distance": "3.509933864894236",
                    "perihelion_time": "2461031.823348198460",
                    "mean_anomaly": "349.7634276302632",
                    "mean_motion": ".3268032620548536",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3836124?"
                },
                "id": "3836124",
                "neo_reference_id": "3836124",
                "name": "(2018 VP5)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3836124",
                "absolute_magnitude_h": 25.3,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0231502122,
                        "estimated_diameter_max": 0.0517654482
                    },
                    "meters": {
                        "estimated_diameter_min": 23.150212221,
                        "estimated_diameter_max": 51.7654482198
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0143848705,
                        "estimated_diameter_max": 0.0321655483
                    },
                    "feet": {
                        "estimated_diameter_min": 75.9521422633,
                        "estimated_diameter_max": 169.8341531374
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-07",
                        "close_approach_date_full": "2025-Nov-07 09:18",
                        "epoch_date_close_approach": 1762507080000,
                        "relative_velocity": {
                            "kilometers_per_second": "10.5347271101",
                            "kilometers_per_hour": "37925.0175963967",
                            "miles_per_hour": "23565.1310726055"
                        },
                        "miss_distance": {
                            "astronomical": "0.1517146357",
                            "lunar": "59.0169932873",
                            "kilometers": "22696186.348545959",
                            "miles": "14102756.2434898742"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "6",
                    "orbit_determination_date": "2021-04-15 20:47:58",
                    "first_observation_date": "2018-11-08",
                    "last_observation_date": "2018-11-12",
                    "data_arc_in_days": 4,
                    "observations_used": 39,
                    "orbit_uncertainty": "7",
                    "minimum_orbit_intersection": ".0298834",
                    "jupiter_tisserand_invariant": "6.450",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".4083536653635149",
                    "semi_major_axis": ".9123803633288579",
                    "inclination": "12.27222095782351",
                    "ascending_node_longitude": "227.8891049112817",
                    "orbital_period": "318.3188237212509",
                    "perihelion_distance": ".5398064977578233",
                    "perihelion_argument": "46.09892957404221",
                    "aphelion_distance": "1.284954228899893",
                    "perihelion_time": "2460900.874463306566",
                    "mean_anomaly": "112.6706639285749",
                    "mean_motion": "1.130941600598678",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "ATE",
                        "orbit_class_description": "Near-Earth asteroid orbits similar to that of 2062 Aten",
                        "orbit_class_range": "a (semi-major axis) < 1.0 AU; q (perihelion) > 0.983 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3989261?"
                },
                "id": "3989261",
                "neo_reference_id": "3989261",
                "name": "(2020 BN11)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3989261",
                "absolute_magnitude_h": 22.3,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0921626549,
                        "estimated_diameter_max": 0.2060819612
                    },
                    "meters": {
                        "estimated_diameter_min": 92.1626548503,
                        "estimated_diameter_max": 206.0819612321
                    },
                    "miles": {
                        "estimated_diameter_min": 0.057267201,
                        "estimated_diameter_max": 0.1280533543
                    },
                    "feet": {
                        "estimated_diameter_min": 302.370924539,
                        "estimated_diameter_max": 676.1219416887
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-07",
                        "close_approach_date_full": "2025-Nov-07 01:52",
                        "epoch_date_close_approach": 1762480320000,
                        "relative_velocity": {
                            "kilometers_per_second": "11.9102248273",
                            "kilometers_per_hour": "42876.8093783819",
                            "miles_per_hour": "26641.9819162507"
                        },
                        "miss_distance": {
                            "astronomical": "0.1507901973",
                            "lunar": "58.6573867497",
                            "kilometers": "22557892.332959751",
                            "miles": "14016824.3269205238"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "5",
                    "orbit_determination_date": "2023-01-14 06:42:05",
                    "first_observation_date": "2020-01-17",
                    "last_observation_date": "2023-01-14",
                    "data_arc_in_days": 1093,
                    "observations_used": 34,
                    "orbit_uncertainty": "0",
                    "minimum_orbit_intersection": ".0973101",
                    "jupiter_tisserand_invariant": "3.526",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".5927898914788626",
                    "semi_major_axis": "2.064542133381523",
                    "inclination": "7.707666382449961",
                    "ascending_node_longitude": "27.43086060474672",
                    "orbital_period": "1083.512815762019",
                    "perihelion_distance": ".8407024261807505",
                    "perihelion_argument": "7.618268584534162",
                    "aphelion_distance": "3.288381840582296",
                    "perihelion_time": "2460979.960404396853",
                    "mean_anomaly": "6.824334986691035",
                    "mean_motion": ".3322526459890712",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54320729?"
                },
                "id": "54320729",
                "neo_reference_id": "54320729",
                "name": "(2022 UN11)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54320729",
                "absolute_magnitude_h": 27.18,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0097399107,
                        "estimated_diameter_max": 0.0217791025
                    },
                    "meters": {
                        "estimated_diameter_min": 9.7399107341,
                        "estimated_diameter_max": 21.7791024963
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0060520981,
                        "estimated_diameter_max": 0.0135329027
                    },
                    "feet": {
                        "estimated_diameter_min": 31.955088733,
                        "estimated_diameter_max": 71.453750634
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-07",
                        "close_approach_date_full": "2025-Nov-07 08:07",
                        "epoch_date_close_approach": 1762502820000,
                        "relative_velocity": {
                            "kilometers_per_second": "20.5511187814",
                            "kilometers_per_hour": "73984.0276132002",
                            "miles_per_hour": "45970.7976022132"
                        },
                        "miss_distance": {
                            "astronomical": "0.4635912042",
                            "lunar": "180.3369784338",
                            "kilometers": "69352256.699055054",
                            "miles": "43093494.0409215852"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "4",
                    "orbit_determination_date": "2022-11-05 13:52:20",
                    "first_observation_date": "2022-10-25",
                    "last_observation_date": "2022-10-30",
                    "data_arc_in_days": 5,
                    "observations_used": 38,
                    "orbit_uncertainty": "6",
                    "minimum_orbit_intersection": ".0123215",
                    "jupiter_tisserand_invariant": "5.977",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".1821120762093408",
                    "semi_major_axis": "1.016547073608792",
                    "inclination": "9.110544559520713",
                    "ascending_node_longitude": "211.150157209666",
                    "orbital_period": "374.360198234188",
                    "perihelion_distance": ".8314215754693651",
                    "perihelion_argument": "80.06731778510168",
                    "aphelion_distance": "1.201672571748219",
                    "perihelion_time": "2460918.542500988988",
                    "mean_anomaly": "78.81366604445289",
                    "mean_motion": ".9616406917671181",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54327903?"
                },
                "id": "54327903",
                "neo_reference_id": "54327903",
                "name": "(2022 WO2)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54327903",
                "absolute_magnitude_h": 25.9,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0175612318,
                        "estimated_diameter_max": 0.0392681082
                    },
                    "meters": {
                        "estimated_diameter_min": 17.561231848,
                        "estimated_diameter_max": 39.2681081809
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0109120402,
                        "estimated_diameter_max": 0.0244000636
                    },
                    "feet": {
                        "estimated_diameter_min": 57.6155918963,
                        "estimated_diameter_max": 128.8323800441
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-07",
                        "close_approach_date_full": "2025-Nov-07 08:26",
                        "epoch_date_close_approach": 1762503960000,
                        "relative_velocity": {
                            "kilometers_per_second": "9.372958592",
                            "kilometers_per_hour": "33742.6509312523",
                            "miles_per_hour": "20966.3710744773"
                        },
                        "miss_distance": {
                            "astronomical": "0.0779061066",
                            "lunar": "30.3054754674",
                            "kilometers": "11654587.607352942",
                            "miles": "7241824.9313249196"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "4",
                    "orbit_determination_date": "2022-11-28 05:32:18",
                    "first_observation_date": "2022-11-19",
                    "last_observation_date": "2022-11-27",
                    "data_arc_in_days": 8,
                    "observations_used": 27,
                    "orbit_uncertainty": "8",
                    "minimum_orbit_intersection": ".0185485",
                    "jupiter_tisserand_invariant": "7.926",
                    "epoch_osculation": "2459902.5",
                    "eccentricity": ".4871422636794555",
                    "semi_major_axis": ".7148279069973027",
                    "inclination": "1.930622154929508",
                    "ascending_node_longitude": "103.1123708873074",
                    "orbital_period": "220.7499813245292",
                    "perihelion_distance": ".3666050222413893",
                    "perihelion_argument": "122.4407234701182",
                    "aphelion_distance": "1.063050791753216",
                    "perihelion_time": "2459993.813711439969",
                    "mean_anomaly": "211.0852144985614",
                    "mean_motion": "1.630804214976383",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "ATE",
                        "orbit_class_description": "Near-Earth asteroid orbits similar to that of 2062 Aten",
                        "orbit_class_range": "a (semi-major axis) < 1.0 AU; q (perihelion) > 0.983 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54404097?"
                },
                "id": "54404097",
                "neo_reference_id": "54404097",
                "name": "(2023 VH6)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54404097",
                "absolute_magnitude_h": 25.6,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0201629919,
                        "estimated_diameter_max": 0.0450858206
                    },
                    "meters": {
                        "estimated_diameter_min": 20.1629919443,
                        "estimated_diameter_max": 45.0858206172
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0125286985,
                        "estimated_diameter_max": 0.0280150214
                    },
                    "feet": {
                        "estimated_diameter_min": 66.1515504905,
                        "estimated_diameter_max": 147.9193637137
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-07",
                        "close_approach_date_full": "2025-Nov-07 07:24",
                        "epoch_date_close_approach": 1762500240000,
                        "relative_velocity": {
                            "kilometers_per_second": "10.6942256027",
                            "kilometers_per_hour": "38499.2121698698",
                            "miles_per_hour": "23921.9132507727"
                        },
                        "miss_distance": {
                            "astronomical": "0.1299418075",
                            "lunar": "50.5473631175",
                            "kilometers": "19439017.625950025",
                            "miles": "12078845.449259345"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "16",
                    "orbit_determination_date": "2024-01-16 05:57:39",
                    "first_observation_date": "2023-11-02",
                    "last_observation_date": "2024-01-13",
                    "data_arc_in_days": 72,
                    "observations_used": 66,
                    "orbit_uncertainty": "5",
                    "minimum_orbit_intersection": ".00160159",
                    "jupiter_tisserand_invariant": "4.309",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".3919512558489275",
                    "semi_major_axis": "1.576470786936531",
                    "inclination": "5.115148727825673",
                    "ascending_node_longitude": "246.0606315529094",
                    "orbital_period": "722.9817221677953",
                    "perihelion_distance": ".9585710821876106",
                    "perihelion_argument": "204.786678665326",
                    "aphelion_distance": "2.194370491685451",
                    "perihelion_time": "2461019.756779799345",
                    "mean_anomaly": "350.4113195185931",
                    "mean_motion": ".4979378993435305",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": true,
                "sentry_data": "http://api.nasa.gov/neo/rest/v1/neo/sentry/54404097?"
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54467114?"
                },
                "id": "54467114",
                "neo_reference_id": "54467114",
                "name": "(2024 QM)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54467114",
                "absolute_magnitude_h": 23.68,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0488151892,
                        "estimated_diameter_max": 0.1091540813
                    },
                    "meters": {
                        "estimated_diameter_min": 48.8151891662,
                        "estimated_diameter_max": 109.1540813101
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0303323429,
                        "estimated_diameter_max": 0.0678251807
                    },
                    "feet": {
                        "estimated_diameter_min": 160.154825224,
                        "estimated_diameter_max": 358.1170761255
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-07",
                        "close_approach_date_full": "2025-Nov-07 22:03",
                        "epoch_date_close_approach": 1762552980000,
                        "relative_velocity": {
                            "kilometers_per_second": "8.2704005959",
                            "kilometers_per_hour": "29773.4421451783",
                            "miles_per_hour": "18500.0590929304"
                        },
                        "miss_distance": {
                            "astronomical": "0.2677154287",
                            "lunar": "104.1413017643",
                            "kilometers": "40049657.899656869",
                            "miles": "24885703.4534440322"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "6",
                    "orbit_determination_date": "2024-09-04 06:24:27",
                    "first_observation_date": "2024-08-13",
                    "last_observation_date": "2024-09-04",
                    "data_arc_in_days": 22,
                    "observations_used": 28,
                    "orbit_uncertainty": "6",
                    "minimum_orbit_intersection": ".029832",
                    "jupiter_tisserand_invariant": "5.911",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".3236327133006772",
                    "semi_major_axis": "1.024765611149959",
                    "inclination": "7.295554597893354",
                    "ascending_node_longitude": "151.8078725653917",
                    "orbital_period": "378.9092796045195",
                    "perihelion_distance": ".693117935916271",
                    "perihelion_argument": "300.4611144231476",
                    "aphelion_distance": "1.356413286383647",
                    "perihelion_time": "2461017.172295401916",
                    "mean_anomaly": "344.1597272282318",
                    "mean_motion": ".9500954961455266",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54554172?"
                },
                "id": "54554172",
                "neo_reference_id": "54554172",
                "name": "(2025 UL4)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54554172",
                "absolute_magnitude_h": 25.73,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0189913123,
                        "estimated_diameter_max": 0.0424658654
                    },
                    "meters": {
                        "estimated_diameter_min": 18.9913123471,
                        "estimated_diameter_max": 42.46586539
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0118006507,
                        "estimated_diameter_max": 0.0263870572
                    },
                    "feet": {
                        "estimated_diameter_min": 62.3074572008,
                        "estimated_diameter_max": 139.3237098062
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-07",
                        "close_approach_date_full": "2025-Nov-07 22:09",
                        "epoch_date_close_approach": 1762553340000,
                        "relative_velocity": {
                            "kilometers_per_second": "8.2161639588",
                            "kilometers_per_hour": "29578.1902516234",
                            "miles_per_hour": "18378.7371594045"
                        },
                        "miss_distance": {
                            "astronomical": "0.043051069",
                            "lunar": "16.746865841",
                            "kilometers": "6440348.22362303",
                            "miles": "4001846.818056614"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "3",
                    "orbit_determination_date": "2025-11-02 05:20:28",
                    "first_observation_date": "2025-10-20",
                    "last_observation_date": "2025-11-02",
                    "data_arc_in_days": 13,
                    "observations_used": 16,
                    "orbit_uncertainty": "8",
                    "minimum_orbit_intersection": ".0356114",
                    "jupiter_tisserand_invariant": "3.339",
                    "epoch_osculation": "2460969.5",
                    "eccentricity": ".5794433395892612",
                    "semi_major_axis": "2.307698193329206",
                    "inclination": "2.48438856513095",
                    "ascending_node_longitude": "317.1127292787385",
                    "orbital_period": "1280.462729494459",
                    "perihelion_distance": ".9705178454224263",
                    "perihelion_argument": "105.7964571713405",
                    "aphelion_distance": "3.644878541235985",
                    "perihelion_time": "2461001.160048974958",
                    "mean_anomaly": "351.0988290651109",
                    "mean_motion": ".2811483627814235",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54554914?"
                },
                "id": "54554914",
                "neo_reference_id": "54554914",
                "name": "(2025 UK8)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54554914",
                "absolute_magnitude_h": 25.74,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0189040552,
                        "estimated_diameter_max": 0.0422707525
                    },
                    "meters": {
                        "estimated_diameter_min": 18.9040551929,
                        "estimated_diameter_max": 42.2707524617
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0117464317,
                        "estimated_diameter_max": 0.0262658197
                    },
                    "feet": {
                        "estimated_diameter_min": 62.0211804391,
                        "estimated_diameter_max": 138.6835755066
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-07",
                        "close_approach_date_full": "2025-Nov-07 10:46",
                        "epoch_date_close_approach": 1762512360000,
                        "relative_velocity": {
                            "kilometers_per_second": "5.5182102936",
                            "kilometers_per_hour": "19865.5570570139",
                            "miles_per_hour": "12343.6846057873"
                        },
                        "miss_distance": {
                            "astronomical": "0.0684562623",
                            "lunar": "26.6294860347",
                            "kilometers": "10240911.028241301",
                            "miles": "6363407.0378439138"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "2",
                    "orbit_determination_date": "2025-11-08 05:20:53",
                    "first_observation_date": "2025-10-19",
                    "last_observation_date": "2025-11-08",
                    "data_arc_in_days": 20,
                    "observations_used": 29,
                    "orbit_uncertainty": "7",
                    "minimum_orbit_intersection": ".062719",
                    "jupiter_tisserand_invariant": "5.267",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".2009761324502073",
                    "semi_major_axis": "1.199850349814616",
                    "inclination": "8.393489041017299",
                    "ascending_node_longitude": "26.82989593251796",
                    "orbital_period": "480.0528479979908",
                    "perihelion_distance": ".9587090669898465",
                    "perihelion_argument": "73.63856315952154",
                    "aphelion_distance": "1.440991632639386",
                    "perihelion_time": "2461039.154695178599",
                    "mean_anomaly": "331.0121701759933",
                    "mean_motion": ".7499174340936453",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54555312?"
                },
                "id": "54555312",
                "neo_reference_id": "54555312",
                "name": "(2025 UN11)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54555312",
                "absolute_magnitude_h": 27.838,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.007193744,
                        "estimated_diameter_max": 0.0160857005
                    },
                    "meters": {
                        "estimated_diameter_min": 7.1937439645,
                        "estimated_diameter_max": 16.0857005174
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0044699839,
                        "estimated_diameter_max": 0.0099951878
                    },
                    "feet": {
                        "estimated_diameter_min": 23.6015229486,
                        "estimated_diameter_max": 52.7746096857
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-07",
                        "close_approach_date_full": "2025-Nov-07 15:36",
                        "epoch_date_close_approach": 1762529760000,
                        "relative_velocity": {
                            "kilometers_per_second": "6.6702631133",
                            "kilometers_per_hour": "24012.9472078452",
                            "miles_per_hour": "14920.7115581191"
                        },
                        "miss_distance": {
                            "astronomical": "0.023084452",
                            "lunar": "8.979851828",
                            "kilometers": "3453384.84931724",
                            "miles": "2145833.841728312"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "2",
                    "orbit_determination_date": "2025-11-02 05:20:32",
                    "first_observation_date": "2025-10-29",
                    "last_observation_date": "2025-11-02",
                    "data_arc_in_days": 4,
                    "observations_used": 21,
                    "orbit_uncertainty": "7",
                    "minimum_orbit_intersection": ".0159102",
                    "jupiter_tisserand_invariant": "4.372",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".3679348700809724",
                    "semi_major_axis": "1.547473097856794",
                    "inclination": "5.200198674068581",
                    "ascending_node_longitude": "42.06587134420142",
                    "orbital_period": "703.1258883271095",
                    "perihelion_distance": ".9781037846430545",
                    "perihelion_argument": "31.09857304833069",
                    "aphelion_distance": "2.116842411070533",
                    "perihelion_time": "2461010.453395714411",
                    "mean_anomaly": "354.9038678326678",
                    "mean_motion": ".5119993531407567",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54561372?"
                },
                "id": "54561372",
                "neo_reference_id": "54561372",
                "name": "(2025 VU1)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54561372",
                "absolute_magnitude_h": 25.296,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0231928958,
                        "estimated_diameter_max": 0.0518608916
                    },
                    "meters": {
                        "estimated_diameter_min": 23.1928957888,
                        "estimated_diameter_max": 51.8608915789
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0144113928,
                        "estimated_diameter_max": 0.0322248541
                    },
                    "feet": {
                        "estimated_diameter_min": 76.0921802198,
                        "estimated_diameter_max": 170.1472875277
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-07",
                        "close_approach_date_full": "2025-Nov-07 06:34",
                        "epoch_date_close_approach": 1762497240000,
                        "relative_velocity": {
                            "kilometers_per_second": "11.8456536647",
                            "kilometers_per_hour": "42644.3531929729",
                            "miles_per_hour": "26497.5426826003"
                        },
                        "miss_distance": {
                            "astronomical": "0.0418281151",
                            "lunar": "16.2711367739",
                            "kilometers": "6257396.925074837",
                            "miles": "3888166.1525812706"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "1",
                    "orbit_determination_date": "2025-11-11 10:42:02",
                    "first_observation_date": "2025-11-08",
                    "last_observation_date": "2025-11-11",
                    "data_arc_in_days": 3,
                    "observations_used": 20,
                    "orbit_uncertainty": "7",
                    "minimum_orbit_intersection": ".0416578",
                    "jupiter_tisserand_invariant": "7.490",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".3965980457316909",
                    "semi_major_axis": ".7628646627775543",
                    "inclination": "17.71803999172518",
                    "ascending_node_longitude": "229.127706518064",
                    "orbital_period": "243.3714748636076",
                    "perihelion_distance": ".4603140283622109",
                    "perihelion_argument": "15.41870326035622",
                    "aphelion_distance": "1.065415297192898",
                    "perihelion_time": "2460892.904476534879",
                    "mean_anomaly": "159.1574709778594",
                    "mean_motion": "1.47922019292423",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "ATE",
                        "orbit_class_description": "Near-Earth asteroid orbits similar to that of 2062 Aten",
                        "orbit_class_range": "a (semi-major axis) < 1.0 AU; q (perihelion) > 0.983 AU"
                    }
                },
                "is_sentry_object": false
            }
        ],
        "2025-11-15": [
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3781579?"
                },
                "id": "3781579",
                "neo_reference_id": "3781579",
                "name": "(2017 RN16)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3781579",
                "absolute_magnitude_h": 28.9,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.004411182,
                        "estimated_diameter_max": 0.0098637028
                    },
                    "meters": {
                        "estimated_diameter_min": 4.411182,
                        "estimated_diameter_max": 9.8637028131
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0027409806,
                        "estimated_diameter_max": 0.0061290189
                    },
                    "feet": {
                        "estimated_diameter_min": 14.4723823528,
                        "estimated_diameter_max": 32.3612307372
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-15",
                        "close_approach_date_full": "2025-Nov-15 05:27",
                        "epoch_date_close_approach": 1763184420000,
                        "relative_velocity": {
                            "kilometers_per_second": "8.069741293",
                            "kilometers_per_hour": "29051.0686549745",
                            "miles_per_hour": "18051.2042984201"
                        },
                        "miss_distance": {
                            "astronomical": "0.4463719423",
                            "lunar": "173.6386855547",
                            "kilometers": "66776291.795842901",
                            "miles": "41492863.6722819938"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "4",
                    "orbit_determination_date": "2021-04-15 19:28:28",
                    "first_observation_date": "2017-09-12",
                    "last_observation_date": "2017-09-20",
                    "data_arc_in_days": 8,
                    "observations_used": 17,
                    "orbit_uncertainty": "7",
                    "minimum_orbit_intersection": ".000562094",
                    "jupiter_tisserand_invariant": "5.257",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".2815733082079017",
                    "semi_major_axis": "1.200079196898349",
                    "inclination": "1.966147720959189",
                    "ascending_node_longitude": "169.29609664",
                    "orbital_period": "480.1901950419129",
                    "perihelion_distance": ".8621689273161991",
                    "perihelion_argument": "109.1768209476849",
                    "aphelion_distance": "1.537989466480499",
                    "perihelion_time": "2460839.207109372197",
                    "mean_anomaly": "120.9217539748823",
                    "mean_motion": ".749702937954778",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": true,
                "sentry_data": "http://api.nasa.gov/neo/rest/v1/neo/sentry/3781579?"
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3788080?"
                },
                "id": "3788080",
                "neo_reference_id": "3788080",
                "name": "(2017 UN7)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3788080",
                "absolute_magnitude_h": 25.7,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0192555078,
                        "estimated_diameter_max": 0.0430566244
                    },
                    "meters": {
                        "estimated_diameter_min": 19.2555078188,
                        "estimated_diameter_max": 43.0566244241
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0119648141,
                        "estimated_diameter_max": 0.0267541378
                    },
                    "feet": {
                        "estimated_diameter_min": 63.1742402722,
                        "estimated_diameter_max": 141.2618956756
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-15",
                        "close_approach_date_full": "2025-Nov-15 19:04",
                        "epoch_date_close_approach": 1763233440000,
                        "relative_velocity": {
                            "kilometers_per_second": "11.0826996957",
                            "kilometers_per_hour": "39897.7189046377",
                            "miles_per_hour": "24790.8909493845"
                        },
                        "miss_distance": {
                            "astronomical": "0.3610721303",
                            "lunar": "140.4570586867",
                            "kilometers": "54015621.609242461",
                            "miles": "33563750.8961735218"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "5",
                    "orbit_determination_date": "2021-04-15 19:55:58",
                    "first_observation_date": "2017-10-25",
                    "last_observation_date": "2017-11-25",
                    "data_arc_in_days": 31,
                    "observations_used": 35,
                    "orbit_uncertainty": "7",
                    "minimum_orbit_intersection": ".0659542",
                    "jupiter_tisserand_invariant": "5.262",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".136033761451729",
                    "semi_major_axis": "1.205217019718033",
                    "inclination": "7.950945153479321",
                    "ascending_node_longitude": "41.0055922558786",
                    "orbital_period": "483.2772048756784",
                    "perihelion_distance": "1.041266815160146",
                    "perihelion_argument": "32.97670723603612",
                    "aphelion_distance": "1.36916722427592",
                    "perihelion_time": "2460995.875718580753",
                    "mean_anomaly": "3.444692392138107",
                    "mean_motion": ".7449140914738756",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "AMO",
                        "orbit_class_description": "Near-Earth asteroid orbits similar to that of 1221 Amor",
                        "orbit_class_range": "1.017 AU < q (perihelion) < 1.3 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3797899?"
                },
                "id": "3797899",
                "neo_reference_id": "3797899",
                "name": "(2018 BB5)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3797899",
                "absolute_magnitude_h": 24.4,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0350392641,
                        "estimated_diameter_max": 0.0783501764
                    },
                    "meters": {
                        "estimated_diameter_min": 35.0392641108,
                        "estimated_diameter_max": 78.3501764334
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0217723826,
                        "estimated_diameter_max": 0.0486845275
                    },
                    "feet": {
                        "estimated_diameter_min": 114.9582192654,
                        "estimated_diameter_max": 257.0543928497
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-15",
                        "close_approach_date_full": "2025-Nov-15 05:10",
                        "epoch_date_close_approach": 1763183400000,
                        "relative_velocity": {
                            "kilometers_per_second": "34.1829267442",
                            "kilometers_per_hour": "123058.5362791157",
                            "miles_per_hour": "76463.7888340983"
                        },
                        "miss_distance": {
                            "astronomical": "0.4869829218",
                            "lunar": "189.4363565802",
                            "kilometers": "72851607.827656566",
                            "miles": "45267890.0041539708"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "3",
                    "orbit_determination_date": "2021-04-15 20:20:30",
                    "first_observation_date": "2018-01-16",
                    "last_observation_date": "2018-02-04",
                    "data_arc_in_days": 19,
                    "observations_used": 23,
                    "orbit_uncertainty": "7",
                    "minimum_orbit_intersection": ".0174644",
                    "jupiter_tisserand_invariant": "6.125",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".5930921811423042",
                    "semi_major_axis": ".9562655131020584",
                    "inclination": "7.963826872284507",
                    "ascending_node_longitude": "128.8397287709932",
                    "orbital_period": "341.5593412413695",
                    "perihelion_distance": ".3891119141851939",
                    "perihelion_argument": "136.2439747941613",
                    "aphelion_distance": "1.523419112018923",
                    "perihelion_time": "2460949.254782417169",
                    "mean_anomaly": "54.01192736456949",
                    "mean_motion": "1.053989619173083",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "ATE",
                        "orbit_class_description": "Near-Earth asteroid orbits similar to that of 2062 Aten",
                        "orbit_class_range": "a (semi-major axis) < 1.0 AU; q (perihelion) > 0.983 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54142836?"
                },
                "id": "54142836",
                "neo_reference_id": "54142836",
                "name": "(2021 HE3)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54142836",
                "absolute_magnitude_h": 25.25,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0236894499,
                        "estimated_diameter_max": 0.0529712204
                    },
                    "meters": {
                        "estimated_diameter_min": 23.6894499356,
                        "estimated_diameter_max": 52.9712204056
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0147199372,
                        "estimated_diameter_max": 0.0329147802
                    },
                    "feet": {
                        "estimated_diameter_min": 77.7212949267,
                        "estimated_diameter_max": 173.7900987554
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-15",
                        "close_approach_date_full": "2025-Nov-15 08:57",
                        "epoch_date_close_approach": 1763197020000,
                        "relative_velocity": {
                            "kilometers_per_second": "8.4276025883",
                            "kilometers_per_hour": "30339.3693180138",
                            "miles_per_hour": "18851.7042298514"
                        },
                        "miss_distance": {
                            "astronomical": "0.2569897077",
                            "lunar": "99.9689962953",
                            "kilometers": "38445112.883842599",
                            "miles": "23888685.4129579062"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "3",
                    "orbit_determination_date": "2021-05-08 05:50:49",
                    "first_observation_date": "2021-04-30",
                    "last_observation_date": "2021-05-07",
                    "data_arc_in_days": 7,
                    "observations_used": 22,
                    "orbit_uncertainty": "7",
                    "minimum_orbit_intersection": ".0549342",
                    "jupiter_tisserand_invariant": "5.361",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".1099792147679169",
                    "semi_major_axis": "1.168385008044125",
                    "inclination": "15.49272268152544",
                    "ascending_node_longitude": "211.5742487879338",
                    "orbital_period": "461.2935588560542",
                    "perihelion_distance": "1.039886942312826",
                    "perihelion_argument": "321.8416190711205",
                    "aphelion_distance": "1.296883073775424",
                    "perihelion_time": "2461132.943107532867",
                    "mean_anomaly": "256.6395307359787",
                    "mean_motion": ".7804141052668314",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "AMO",
                        "orbit_class_description": "Near-Earth asteroid orbits similar to that of 1221 Amor",
                        "orbit_class_range": "1.017 AU < q (perihelion) < 1.3 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54224424?"
                },
                "id": "54224424",
                "neo_reference_id": "54224424",
                "name": "(2021 WB2)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54224424",
                "absolute_magnitude_h": 24.58,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0322518756,
                        "estimated_diameter_max": 0.0721173863
                    },
                    "meters": {
                        "estimated_diameter_min": 32.2518756454,
                        "estimated_diameter_max": 72.1173863449
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0200403802,
                        "estimated_diameter_max": 0.0448116525
                    },
                    "feet": {
                        "estimated_diameter_min": 105.8132436923,
                        "estimated_diameter_max": 236.6056058158
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-15",
                        "close_approach_date_full": "2025-Nov-15 03:53",
                        "epoch_date_close_approach": 1763178780000,
                        "relative_velocity": {
                            "kilometers_per_second": "14.6204102181",
                            "kilometers_per_hour": "52633.4767852057",
                            "miles_per_hour": "32704.3956168963"
                        },
                        "miss_distance": {
                            "astronomical": "0.0710294133",
                            "lunar": "27.6304417737",
                            "kilometers": "10625848.937029671",
                            "miles": "6602596.3630086198"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "8",
                    "orbit_determination_date": "2023-12-05 07:17:13",
                    "first_observation_date": "2021-11-27",
                    "last_observation_date": "2023-12-03",
                    "data_arc_in_days": 736,
                    "observations_used": 44,
                    "orbit_uncertainty": "0",
                    "minimum_orbit_intersection": ".00505361",
                    "jupiter_tisserand_invariant": "4.194",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".5655753765924161",
                    "semi_major_axis": "1.582694377603777",
                    "inclination": "4.63405844914793",
                    "ascending_node_longitude": "255.4321766098024",
                    "orbital_period": "727.2672251798092",
                    "perihelion_distance": ".6875614089598214",
                    "perihelion_argument": "80.41711356999507",
                    "aphelion_distance": "2.477827346247734",
                    "perihelion_time": "2460946.161241981569",
                    "mean_anomaly": "26.89788871181267",
                    "mean_motion": ".4950037448903238",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54225715?"
                },
                "id": "54225715",
                "neo_reference_id": "54225715",
                "name": "(2021 WF5)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54225715",
                "absolute_magnitude_h": 27.14,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0099209892,
                        "estimated_diameter_max": 0.0221840062
                    },
                    "meters": {
                        "estimated_diameter_min": 9.9209891942,
                        "estimated_diameter_max": 22.1840062423
                    },
                    "miles": {
                        "estimated_diameter_min": 0.006164615,
                        "estimated_diameter_max": 0.0137844981
                    },
                    "feet": {
                        "estimated_diameter_min": 32.5491781879,
                        "estimated_diameter_max": 72.78217504
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-15",
                        "close_approach_date_full": "2025-Nov-15 06:59",
                        "epoch_date_close_approach": 1763189940000,
                        "relative_velocity": {
                            "kilometers_per_second": "10.5641178786",
                            "kilometers_per_hour": "38030.8243628095",
                            "miles_per_hour": "23630.8752825468"
                        },
                        "miss_distance": {
                            "astronomical": "0.2576764306",
                            "lunar": "100.2361315034",
                            "kilometers": "38547845.166962822",
                            "miles": "23952520.2936260636"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "2",
                    "orbit_determination_date": "2021-12-02 05:21:27",
                    "first_observation_date": "2021-11-30",
                    "last_observation_date": "2021-12-02",
                    "data_arc_in_days": 2,
                    "observations_used": 17,
                    "orbit_uncertainty": "7",
                    "minimum_orbit_intersection": ".0291134",
                    "jupiter_tisserand_invariant": "5.242",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".1579392815560048",
                    "semi_major_axis": "1.202865270543068",
                    "inclination": "15.19382676788771",
                    "ascending_node_longitude": "246.8981309386678",
                    "orbital_period": "481.8633613968054",
                    "perihelion_distance": "1.012885593904827",
                    "perihelion_argument": "168.0798842018825",
                    "aphelion_distance": "1.39284494718131",
                    "perihelion_time": "2460982.717986527000",
                    "mean_anomaly": "13.28493793701923",
                    "mean_motion": ".747099756570923",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54264231?"
                },
                "id": "54264231",
                "neo_reference_id": "54264231",
                "name": "(2022 FV)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54264231",
                "absolute_magnitude_h": 24.15,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.039314701,
                        "estimated_diameter_max": 0.0879103439
                    },
                    "meters": {
                        "estimated_diameter_min": 39.3147009575,
                        "estimated_diameter_max": 87.9103438561
                    },
                    "miles": {
                        "estimated_diameter_min": 0.024429015,
                        "estimated_diameter_max": 0.0546249383
                    },
                    "feet": {
                        "estimated_diameter_min": 128.9852434894,
                        "estimated_diameter_max": 288.4197725368
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-15",
                        "close_approach_date_full": "2025-Nov-15 12:04",
                        "epoch_date_close_approach": 1763208240000,
                        "relative_velocity": {
                            "kilometers_per_second": "23.4996469571",
                            "kilometers_per_hour": "84598.7290455838",
                            "miles_per_hour": "52566.3602783518"
                        },
                        "miss_distance": {
                            "astronomical": "0.3335271446",
                            "lunar": "129.7420592494",
                            "kilometers": "49894950.419342002",
                            "miles": "31003284.5491715476"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "6",
                    "orbit_determination_date": "2022-04-10 06:04:04",
                    "first_observation_date": "2022-03-23",
                    "last_observation_date": "2022-04-09",
                    "data_arc_in_days": 17,
                    "observations_used": 47,
                    "orbit_uncertainty": "7",
                    "minimum_orbit_intersection": ".0596844",
                    "jupiter_tisserand_invariant": "5.671",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".4283626943945393",
                    "semi_major_axis": "1.061675997073216",
                    "inclination": "19.33682304747538",
                    "ascending_node_longitude": "3.902422125520963",
                    "orbital_period": "399.5640669554535",
                    "perihelion_distance": ".6068936063929242",
                    "perihelion_argument": "300.6273604137291",
                    "aphelion_distance": "1.516458387753508",
                    "perihelion_time": "2460944.860187723372",
                    "mean_anomaly": "50.13046486439722",
                    "mean_motion": ".9009819194780986",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54561506?"
                },
                "id": "54561506",
                "neo_reference_id": "54561506",
                "name": "(2025 VQ2)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54561506",
                "absolute_magnitude_h": 27.571,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0081349517,
                        "estimated_diameter_max": 0.0181903049
                    },
                    "meters": {
                        "estimated_diameter_min": 8.1349516603,
                        "estimated_diameter_max": 18.1903049061
                    },
                    "miles": {
                        "estimated_diameter_min": 0.005054823,
                        "estimated_diameter_max": 0.0113029279
                    },
                    "feet": {
                        "estimated_diameter_min": 26.6894748052,
                        "estimated_diameter_max": 59.6794799483
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-15",
                        "close_approach_date_full": "2025-Nov-15 20:57",
                        "epoch_date_close_approach": 1763240220000,
                        "relative_velocity": {
                            "kilometers_per_second": "5.8096894292",
                            "kilometers_per_hour": "20914.881945133",
                            "miles_per_hour": "12995.6942841856"
                        },
                        "miss_distance": {
                            "astronomical": "0.0085267524",
                            "lunar": "3.3169066836",
                            "kilometers": "1275583.997057388",
                            "miles": "792611.1419044344"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "3",
                    "orbit_determination_date": "2025-11-14 05:39:13",
                    "first_observation_date": "2025-11-10",
                    "last_observation_date": "2025-11-13",
                    "data_arc_in_days": 3,
                    "observations_used": 32,
                    "orbit_uncertainty": "7",
                    "minimum_orbit_intersection": ".00771126",
                    "jupiter_tisserand_invariant": "4.297",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".381472722355588",
                    "semi_major_axis": "1.587702072022062",
                    "inclination": "3.313266561590346",
                    "ascending_node_longitude": "229.260117417618",
                    "orbital_period": "730.7215983250697",
                    "perihelion_distance": ".9820370403181982",
                    "perihelion_argument": "202.6993645854719",
                    "aphelion_distance": "2.193367103725926",
                    "perihelion_time": "2461010.996724165021",
                    "mean_anomaly": "354.8286451254905",
                    "mean_motion": ".492663691377369",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54561648?"
                },
                "id": "54561648",
                "neo_reference_id": "54561648",
                "name": "(2025 VT3)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54561648",
                "absolute_magnitude_h": 26.872,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0112241891,
                        "estimated_diameter_max": 0.0250980499
                    },
                    "meters": {
                        "estimated_diameter_min": 11.2241891447,
                        "estimated_diameter_max": 25.0980499199
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0069743856,
                        "estimated_diameter_max": 0.0155952004
                    },
                    "feet": {
                        "estimated_diameter_min": 36.8247687135,
                        "estimated_diameter_max": 82.3426860992
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-15",
                        "close_approach_date_full": "2025-Nov-15 18:45",
                        "epoch_date_close_approach": 1763232300000,
                        "relative_velocity": {
                            "kilometers_per_second": "7.6105353572",
                            "kilometers_per_hour": "27397.9272857464",
                            "miles_per_hour": "17024.0065404128"
                        },
                        "miss_distance": {
                            "astronomical": "0.0076193381",
                            "lunar": "2.9639225209",
                            "kilometers": "1139836.750569847",
                            "miles": "708261.7142720086"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "1",
                    "orbit_determination_date": "2025-11-14 10:42:03",
                    "first_observation_date": "2025-11-14",
                    "last_observation_date": "2025-11-14",
                    "data_arc_in_days": null,
                    "observations_used": 34,
                    "orbit_uncertainty": "7",
                    "minimum_orbit_intersection": ".00719562",
                    "jupiter_tisserand_invariant": "4.319",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".3655678250619605",
                    "semi_major_axis": "1.570533089094915",
                    "inclination": "10.40910594772616",
                    "ascending_node_longitude": "232.9345001745862",
                    "orbital_period": "718.9009593261619",
                    "perihelion_distance": ".9963967235266448",
                    "perihelion_argument": "179.5349567744003",
                    "aphelion_distance": "2.144669454663186",
                    "perihelion_time": "2460994.663815658219",
                    "mean_anomaly": "2.922553288856943",
                    "mean_motion": ".5007643894889696",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            }
        ],
        "2025-11-14": [
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3465236?"
                },
                "id": "3465236",
                "neo_reference_id": "3465236",
                "name": "(2009 OS5)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3465236",
                "absolute_magnitude_h": 24.4,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0350392641,
                        "estimated_diameter_max": 0.0783501764
                    },
                    "meters": {
                        "estimated_diameter_min": 35.0392641108,
                        "estimated_diameter_max": 78.3501764334
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0217723826,
                        "estimated_diameter_max": 0.0486845275
                    },
                    "feet": {
                        "estimated_diameter_min": 114.9582192654,
                        "estimated_diameter_max": 257.0543928497
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-14",
                        "close_approach_date_full": "2025-Nov-14 17:23",
                        "epoch_date_close_approach": 1763140980000,
                        "relative_velocity": {
                            "kilometers_per_second": "4.5507998261",
                            "kilometers_per_hour": "16382.8793740228",
                            "miles_per_hour": "10179.6841310421"
                        },
                        "miss_distance": {
                            "astronomical": "0.2568724015",
                            "lunar": "99.9233641835",
                            "kilometers": "38427564.126184805",
                            "miles": "23877781.120588109"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "34",
                    "orbit_determination_date": "2022-12-20 14:11:18",
                    "first_observation_date": "2009-07-21",
                    "last_observation_date": "2020-09-12",
                    "data_arc_in_days": 4071,
                    "observations_used": 113,
                    "orbit_uncertainty": "0",
                    "minimum_orbit_intersection": ".0279054",
                    "jupiter_tisserand_invariant": "5.467",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".09935813018872636",
                    "semi_major_axis": "1.147909587209409",
                    "inclination": "1.710845730939795",
                    "ascending_node_longitude": "144.3360979416371",
                    "orbital_period": "449.2208978061339",
                    "perihelion_distance": "1.03385543699857",
                    "perihelion_argument": "122.8232141771411",
                    "aphelion_distance": "1.261963737420249",
                    "perihelion_time": "2460818.558393681942",
                    "mean_anomaly": "145.8057240755694",
                    "mean_motion": ".801387472751461",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "AMO",
                        "orbit_class_description": "Near-Earth asteroid orbits similar to that of 1221 Amor",
                        "orbit_class_range": "1.017 AU < q (perihelion) < 1.3 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3587872?"
                },
                "id": "3587872",
                "neo_reference_id": "3587872",
                "name": "(2011 WA)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3587872",
                "absolute_magnitude_h": 21.68,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.1226182113,
                        "estimated_diameter_max": 0.2741826558
                    },
                    "meters": {
                        "estimated_diameter_min": 122.6182113181,
                        "estimated_diameter_max": 274.1826557868
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0761914006,
                        "estimated_diameter_max": 0.170369151
                    },
                    "feet": {
                        "estimated_diameter_min": 402.290732421,
                        "estimated_diameter_max": 899.5494244116
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-14",
                        "close_approach_date_full": "2025-Nov-14 01:21",
                        "epoch_date_close_approach": 1763083260000,
                        "relative_velocity": {
                            "kilometers_per_second": "15.3224491869",
                            "kilometers_per_hour": "55160.8170726985",
                            "miles_per_hour": "34274.7865860887"
                        },
                        "miss_distance": {
                            "astronomical": "0.1198288589",
                            "lunar": "46.6134261121",
                            "kilometers": "17926142.055970543",
                            "miles": "11138788.1611097734"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "33",
                    "orbit_determination_date": "2025-11-12 06:09:47",
                    "first_observation_date": "2011-11-16",
                    "last_observation_date": "2025-11-11",
                    "data_arc_in_days": 5109,
                    "observations_used": 273,
                    "orbit_uncertainty": "0",
                    "minimum_orbit_intersection": ".0504018",
                    "jupiter_tisserand_invariant": "6.827",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".2856986268981836",
                    "semi_major_axis": ".8446524113834228",
                    "inclination": "30.38578191597787",
                    "ascending_node_longitude": "51.50711303561835",
                    "orbital_period": "283.5407385555914",
                    "perihelion_distance": ".6033363772449393",
                    "perihelion_argument": "206.1080927097439",
                    "aphelion_distance": "1.085968445521907",
                    "perihelion_time": "2460879.294833868345",
                    "mean_anomaly": "153.8892084067873",
                    "mean_motion": "1.269658821634966",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "ATE",
                        "orbit_class_description": "Near-Earth asteroid orbits similar to that of 2062 Aten",
                        "orbit_class_range": "a (semi-major axis) < 1.0 AU; q (perihelion) > 0.983 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3634154?"
                },
                "id": "3634154",
                "neo_reference_id": "3634154",
                "name": "(2013 GM3)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3634154",
                "absolute_magnitude_h": 26.3,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0146067964,
                        "estimated_diameter_max": 0.0326617897
                    },
                    "meters": {
                        "estimated_diameter_min": 14.6067964271,
                        "estimated_diameter_max": 32.6617897446
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0090762397,
                        "estimated_diameter_max": 0.020295089
                    },
                    "feet": {
                        "estimated_diameter_min": 47.92256199,
                        "estimated_diameter_max": 107.1581062656
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-14",
                        "close_approach_date_full": "2025-Nov-14 18:09",
                        "epoch_date_close_approach": 1763143740000,
                        "relative_velocity": {
                            "kilometers_per_second": "8.4517094845",
                            "kilometers_per_hour": "30426.1541440426",
                            "miles_per_hour": "18905.6289457803"
                        },
                        "miss_distance": {
                            "astronomical": "0.3161366892",
                            "lunar": "122.9771720988",
                            "kilometers": "47293375.333172004",
                            "miles": "29386740.7507574952"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "19",
                    "orbit_determination_date": "2021-04-15 07:55:56",
                    "first_observation_date": "2013-04-01",
                    "last_observation_date": "2013-04-13",
                    "data_arc_in_days": 12,
                    "observations_used": 61,
                    "orbit_uncertainty": "7",
                    "minimum_orbit_intersection": ".000141692",
                    "jupiter_tisserand_invariant": "6.989",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".287270551931035",
                    "semi_major_axis": ".8364330896910798",
                    "inclination": ".01761681678422915",
                    "ascending_node_longitude": "57.61284745290674",
                    "orbital_period": "279.4121164343264",
                    "perihelion_distance": ".5961504943621424",
                    "perihelion_argument": "291.5269396484497",
                    "aphelion_distance": "1.076715685020017",
                    "perihelion_time": "2460960.279374431355",
                    "mean_anomaly": "51.82103549942257",
                    "mean_motion": "1.288419430746537",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "ATE",
                        "orbit_class_description": "Near-Earth asteroid orbits similar to that of 2062 Aten",
                        "orbit_class_range": "a (semi-major axis) < 1.0 AU; q (perihelion) > 0.983 AU"
                    }
                },
                "is_sentry_object": true,
                "sentry_data": "http://api.nasa.gov/neo/rest/v1/neo/sentry/3634154?"
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3835954?"
                },
                "id": "3835954",
                "neo_reference_id": "3835954",
                "name": "(2018 VR)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3835954",
                "absolute_magnitude_h": 24.76,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0296862251,
                        "estimated_diameter_max": 0.0663804174
                    },
                    "meters": {
                        "estimated_diameter_min": 29.686225126,
                        "estimated_diameter_max": 66.3804173771
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0184461594,
                        "estimated_diameter_max": 0.0412468663
                    },
                    "feet": {
                        "estimated_diameter_min": 97.3957548424,
                        "estimated_diameter_max": 217.7835285475
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-14",
                        "close_approach_date_full": "2025-Nov-14 08:54",
                        "epoch_date_close_approach": 1763110440000,
                        "relative_velocity": {
                            "kilometers_per_second": "8.3080175418",
                            "kilometers_per_hour": "29908.8631503272",
                            "miles_per_hour": "18584.2044391575"
                        },
                        "miss_distance": {
                            "astronomical": "0.0959340393",
                            "lunar": "37.3183412877",
                            "kilometers": "14351527.939776291",
                            "miles": "8917625.9459671758"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "10",
                    "orbit_determination_date": "2025-10-24 09:24:12",
                    "first_observation_date": "2011-09-26",
                    "last_observation_date": "2025-10-21",
                    "data_arc_in_days": 5139,
                    "observations_used": 47,
                    "orbit_uncertainty": "0",
                    "minimum_orbit_intersection": ".0746391",
                    "jupiter_tisserand_invariant": "4.006",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".4291119599638998",
                    "semi_major_axis": "1.756820687415705",
                    "inclination": "5.902324744088097",
                    "ascending_node_longitude": "24.58297310639302",
                    "orbital_period": "850.5298930814411",
                    "perihelion_distance": "1.002947918933626",
                    "perihelion_argument": "60.40562550342814",
                    "aphelion_distance": "2.510693455897783",
                    "perihelion_time": "2461019.895145019535",
                    "mean_anomaly": "351.7907033440808",
                    "mean_motion": ".4232655464885922",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3879166?"
                },
                "id": "3879166",
                "neo_reference_id": "3879166",
                "name": "(2019 TB7)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3879166",
                "absolute_magnitude_h": 26.8,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0116025908,
                        "estimated_diameter_max": 0.0259441818
                    },
                    "meters": {
                        "estimated_diameter_min": 11.6025908209,
                        "estimated_diameter_max": 25.9441817907
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0072095135,
                        "estimated_diameter_max": 0.0161209622
                    },
                    "feet": {
                        "estimated_diameter_min": 38.066244069,
                        "estimated_diameter_max": 85.1187093863
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-14",
                        "close_approach_date_full": "2025-Nov-14 21:07",
                        "epoch_date_close_approach": 1763154420000,
                        "relative_velocity": {
                            "kilometers_per_second": "16.1827794551",
                            "kilometers_per_hour": "58258.0060383438",
                            "miles_per_hour": "36199.2593631031"
                        },
                        "miss_distance": {
                            "astronomical": "0.4507600719",
                            "lunar": "175.3456679691",
                            "kilometers": "67432746.637286853",
                            "miles": "41900765.7960824514"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "6",
                    "orbit_determination_date": "2021-04-15 21:55:52",
                    "first_observation_date": "2019-10-10",
                    "last_observation_date": "2019-10-24",
                    "data_arc_in_days": 14,
                    "observations_used": 30,
                    "orbit_uncertainty": "6",
                    "minimum_orbit_intersection": ".00953011",
                    "jupiter_tisserand_invariant": "6.628",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".1309476523015544",
                    "semi_major_axis": ".8942605368097529",
                    "inclination": "10.00013473127233",
                    "ascending_node_longitude": "18.57752631058582",
                    "orbital_period": "308.8833692774061",
                    "perihelion_distance": ".7771592189685881",
                    "perihelion_argument": "191.5804909163863",
                    "aphelion_distance": "1.011361854650918",
                    "perihelion_time": "2461097.480567074732",
                    "mean_anomaly": "246.9702689769991",
                    "mean_motion": "1.165488452298921",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "ATE",
                        "orbit_class_description": "Near-Earth asteroid orbits similar to that of 2062 Aten",
                        "orbit_class_range": "a (semi-major axis) < 1.0 AU; q (perihelion) > 0.983 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3892813?"
                },
                "id": "3892813",
                "neo_reference_id": "3892813",
                "name": "(2019 VL5)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3892813",
                "absolute_magnitude_h": 25.86,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0178877195,
                        "estimated_diameter_max": 0.0399981568
                    },
                    "meters": {
                        "estimated_diameter_min": 17.887719524,
                        "estimated_diameter_max": 39.9981568182
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0111149102,
                        "estimated_diameter_max": 0.0248536947
                    },
                    "feet": {
                        "estimated_diameter_min": 58.6867457232,
                        "estimated_diameter_max": 131.2275528154
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-14",
                        "close_approach_date_full": "2025-Nov-14 12:51",
                        "epoch_date_close_approach": 1763124660000,
                        "relative_velocity": {
                            "kilometers_per_second": "9.0762322052",
                            "kilometers_per_hour": "32674.4359388356",
                            "miles_per_hour": "20302.6238198837"
                        },
                        "miss_distance": {
                            "astronomical": "0.0376722708",
                            "lunar": "14.6545133412",
                            "kilometers": "5635691.469743196",
                            "miles": "3501856.2960642648"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "9",
                    "orbit_determination_date": "2024-11-09 05:21:10",
                    "first_observation_date": "2019-11-09",
                    "last_observation_date": "2024-11-09",
                    "data_arc_in_days": 1827,
                    "observations_used": 39,
                    "orbit_uncertainty": "0",
                    "minimum_orbit_intersection": ".00570178",
                    "jupiter_tisserand_invariant": "6.058",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".2791969536171272",
                    "semi_major_axis": ".9971837876612615",
                    "inclination": "1.778041647753811",
                    "ascending_node_longitude": "277.8709579107488",
                    "orbital_period": "363.7150236886322",
                    "perihelion_distance": ".7187731119498491",
                    "perihelion_argument": "239.4235590248035",
                    "aphelion_distance": "1.275594463372674",
                    "perihelion_time": "2461065.978155936793",
                    "mean_anomaly": "295.1906448675462",
                    "mean_motion": ".9897858943219993",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "ATE",
                        "orbit_class_description": "Near-Earth asteroid orbits similar to that of 2062 Aten",
                        "orbit_class_range": "a (semi-major axis) < 1.0 AU; q (perihelion) > 0.983 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54016809?"
                },
                "id": "54016809",
                "neo_reference_id": "54016809",
                "name": "(2020 HW7)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54016809",
                "absolute_magnitude_h": 27.1,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0101054342,
                        "estimated_diameter_max": 0.0225964377
                    },
                    "meters": {
                        "estimated_diameter_min": 10.1054341542,
                        "estimated_diameter_max": 22.5964377109
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0062792237,
                        "estimated_diameter_max": 0.0140407711
                    },
                    "feet": {
                        "estimated_diameter_min": 33.1543125905,
                        "estimated_diameter_max": 74.1352966996
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-14",
                        "close_approach_date_full": "2025-Nov-14 22:45",
                        "epoch_date_close_approach": 1763160300000,
                        "relative_velocity": {
                            "kilometers_per_second": "20.1215159036",
                            "kilometers_per_hour": "72437.4572531026",
                            "miles_per_hour": "45009.8189248514"
                        },
                        "miss_distance": {
                            "astronomical": "0.3777197394",
                            "lunar": "146.9329786266",
                            "kilometers": "56506068.471195078",
                            "miles": "35111242.8180369564"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "4",
                    "orbit_determination_date": "2021-04-15 22:25:39",
                    "first_observation_date": "2020-04-26",
                    "last_observation_date": "2020-04-30",
                    "data_arc_in_days": 4,
                    "observations_used": 23,
                    "orbit_uncertainty": "8",
                    "minimum_orbit_intersection": ".00297323",
                    "jupiter_tisserand_invariant": "4.971",
                    "epoch_osculation": "2458966.5",
                    "eccentricity": ".3463911841410927",
                    "semi_major_axis": "1.288673176855057",
                    "inclination": ".2469846992776797",
                    "ascending_node_longitude": "345.0410726637372",
                    "orbital_period": "534.3337549630863",
                    "perihelion_distance": ".8422881491533697",
                    "perihelion_argument": "154.7815943322717",
                    "aphelion_distance": "1.735058204556743",
                    "perihelion_time": "2458905.951878871876",
                    "mean_anomaly": "40.79346177115551",
                    "mean_motion": ".6737362119764829",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": true,
                "sentry_data": "http://api.nasa.gov/neo/rest/v1/neo/sentry/54016809?"
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54326659?"
                },
                "id": "54326659",
                "neo_reference_id": "54326659",
                "name": "(2022 VR1)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54326659",
                "absolute_magnitude_h": 24.79,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0292789148,
                        "estimated_diameter_max": 0.0654696439
                    },
                    "meters": {
                        "estimated_diameter_min": 29.2789148476,
                        "estimated_diameter_max": 65.4696439067
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0181930686,
                        "estimated_diameter_max": 0.0406809381
                    },
                    "feet": {
                        "estimated_diameter_min": 96.0594349886,
                        "estimated_diameter_max": 214.7954265148
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-14",
                        "close_approach_date_full": "2025-Nov-14 15:52",
                        "epoch_date_close_approach": 1763135520000,
                        "relative_velocity": {
                            "kilometers_per_second": "8.8163366443",
                            "kilometers_per_hour": "31738.8119196587",
                            "miles_per_hour": "19721.2634397457"
                        },
                        "miss_distance": {
                            "astronomical": "0.1180342478",
                            "lunar": "45.9153223942",
                            "kilometers": "17657672.057932186",
                            "miles": "10971968.6398527268"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "10",
                    "orbit_determination_date": "2023-11-12 08:12:03",
                    "first_observation_date": "2022-10-31",
                    "last_observation_date": "2023-11-12",
                    "data_arc_in_days": 377,
                    "observations_used": 98,
                    "orbit_uncertainty": "0",
                    "minimum_orbit_intersection": ".0107521",
                    "jupiter_tisserand_invariant": "6.092",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".1677836963894073",
                    "semi_major_axis": ".9939699631751098",
                    "inclination": "5.830798923888344",
                    "ascending_node_longitude": "242.5595553881063",
                    "orbital_period": "361.9581149847095",
                    "perihelion_distance": ".8271980086535469",
                    "perihelion_argument": "270.5656705608441",
                    "aphelion_distance": "1.160741917696673",
                    "perihelion_time": "2461069.441591609946",
                    "mean_anomaly": "291.4313674646335",
                    "mean_motion": ".9945902166476024",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "ATE",
                        "orbit_class_description": "Near-Earth asteroid orbits similar to that of 2062 Aten",
                        "orbit_class_range": "a (semi-major axis) < 1.0 AU; q (perihelion) > 0.983 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54555527?"
                },
                "id": "54555527",
                "neo_reference_id": "54555527",
                "name": "(2025 US11)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54555527",
                "absolute_magnitude_h": 26.13,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0157962856,
                        "estimated_diameter_max": 0.0353215683
                    },
                    "meters": {
                        "estimated_diameter_min": 15.796285576,
                        "estimated_diameter_max": 35.3215683399
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0098153538,
                        "estimated_diameter_max": 0.0219477982
                    },
                    "feet": {
                        "estimated_diameter_min": 51.8250855692,
                        "estimated_diameter_max": 115.8844142724
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-14",
                        "close_approach_date_full": "2025-Nov-14 03:15",
                        "epoch_date_close_approach": 1763090100000,
                        "relative_velocity": {
                            "kilometers_per_second": "8.0717890903",
                            "kilometers_per_hour": "29058.4407252085",
                            "miles_per_hour": "18055.7850161719"
                        },
                        "miss_distance": {
                            "astronomical": "0.0323892407",
                            "lunar": "12.5994146323",
                            "kilometers": "4845361.419637309",
                            "miles": "3010767.9749965042"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "4",
                    "orbit_determination_date": "2025-11-10 05:32:03",
                    "first_observation_date": "2025-10-30",
                    "last_observation_date": "2025-11-10",
                    "data_arc_in_days": 11,
                    "observations_used": 25,
                    "orbit_uncertainty": "8",
                    "minimum_orbit_intersection": ".0041522",
                    "jupiter_tisserand_invariant": "4.053",
                    "epoch_osculation": "2460979.5",
                    "eccentricity": ".4417451153126531",
                    "semi_major_axis": "1.721727886972989",
                    "inclination": "3.085514491594969",
                    "ascending_node_longitude": "56.17604212992627",
                    "orbital_period": "825.17335791624",
                    "perihelion_distance": ".9611630030050955",
                    "perihelion_argument": "28.84616469275567",
                    "aphelion_distance": "2.482292770940882",
                    "perihelion_time": "2461019.821506789731",
                    "mean_anomaly": "342.4088571146324",
                    "mean_motion": ".4362719621839053",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54555753?"
                },
                "id": "54555753",
                "neo_reference_id": "54555753",
                "name": "(2025 UM17)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54555753",
                "absolute_magnitude_h": 21.133,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.1577447727,
                        "estimated_diameter_max": 0.3527280348
                    },
                    "meters": {
                        "estimated_diameter_min": 157.744772691,
                        "estimated_diameter_max": 352.7280348323
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0980180272,
                        "estimated_diameter_max": 0.2191749717
                    },
                    "feet": {
                        "estimated_diameter_min": 517.5353600355,
                        "estimated_diameter_max": 1157.2442457993
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-14",
                        "close_approach_date_full": "2025-Nov-14 23:07",
                        "epoch_date_close_approach": 1763161620000,
                        "relative_velocity": {
                            "kilometers_per_second": "25.9644559077",
                            "kilometers_per_hour": "93472.0412678438",
                            "miles_per_hour": "58079.8914200111"
                        },
                        "miss_distance": {
                            "astronomical": "0.1982429144",
                            "lunar": "77.1164937016",
                            "kilometers": "29656717.736832328",
                            "miles": "18427829.8918410064"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "5",
                    "orbit_determination_date": "2025-11-13 05:20:53",
                    "first_observation_date": "2025-10-30",
                    "last_observation_date": "2025-11-12",
                    "data_arc_in_days": 13,
                    "observations_used": 35,
                    "orbit_uncertainty": "8",
                    "minimum_orbit_intersection": ".147637",
                    "jupiter_tisserand_invariant": "2.754",
                    "epoch_osculation": "2460979.5",
                    "eccentricity": ".5816230353530921",
                    "semi_major_axis": "2.70048321029334",
                    "inclination": "45.11178808553579",
                    "ascending_node_longitude": "56.31275478766251",
                    "orbital_period": "1620.916522216819",
                    "perihelion_distance": "1.129819968602465",
                    "perihelion_argument": "10.21653918691068",
                    "aphelion_distance": "4.271146451984215",
                    "perihelion_time": "2461000.273741737812",
                    "mean_anomaly": "355.3862232119243",
                    "mean_motion": ".2220965700982874",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "AMO",
                        "orbit_class_description": "Near-Earth asteroid orbits similar to that of 1221 Amor",
                        "orbit_class_range": "1.017 AU < q (perihelion) < 1.3 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54561138?"
                },
                "id": "54561138",
                "neo_reference_id": "54561138",
                "name": "(2025 VD1)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54561138",
                "absolute_magnitude_h": 27.028,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0104461192,
                        "estimated_diameter_max": 0.0233582326
                    },
                    "meters": {
                        "estimated_diameter_min": 10.4461191849,
                        "estimated_diameter_max": 23.3582325984
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0064909155,
                        "estimated_diameter_max": 0.0145141283
                    },
                    "feet": {
                        "estimated_diameter_min": 34.2720456665,
                        "estimated_diameter_max": 76.6346238382
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-14",
                        "close_approach_date_full": "2025-Nov-14 19:58",
                        "epoch_date_close_approach": 1763150280000,
                        "relative_velocity": {
                            "kilometers_per_second": "6.6276104876",
                            "kilometers_per_hour": "23859.3977553995",
                            "miles_per_hour": "14825.301899737"
                        },
                        "miss_distance": {
                            "astronomical": "0.0087373762",
                            "lunar": "3.3988393418",
                            "kilometers": "1307092.868908694",
                            "miles": "812189.8469962172"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "4",
                    "orbit_determination_date": "2025-11-13 05:20:53",
                    "first_observation_date": "2025-11-10",
                    "last_observation_date": "2025-11-12",
                    "data_arc_in_days": 2,
                    "observations_used": 44,
                    "orbit_uncertainty": "7",
                    "minimum_orbit_intersection": ".00801315",
                    "jupiter_tisserand_invariant": "4.897",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".300872793836726",
                    "semi_major_axis": "1.320766235227847",
                    "inclination": "4.851038780060521",
                    "ascending_node_longitude": "226.7952385388083",
                    "orbital_period": "554.4180533838955",
                    "perihelion_distance": ".9233836080296306",
                    "perihelion_argument": "230.7750213904764",
                    "aphelion_distance": "1.718148862426064",
                    "perihelion_time": "2461031.954946648544",
                    "mean_anomaly": "339.5753750723644",
                    "mean_motion": ".6493295046990927",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54561370?"
                },
                "id": "54561370",
                "neo_reference_id": "54561370",
                "name": "(2025 VS1)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54561370",
                "absolute_magnitude_h": 26.751,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0118673835,
                        "estimated_diameter_max": 0.0265362762
                    },
                    "meters": {
                        "estimated_diameter_min": 11.8673834887,
                        "estimated_diameter_max": 26.5362761958
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0073740479,
                        "estimated_diameter_max": 0.0164888725
                    },
                    "feet": {
                        "estimated_diameter_min": 38.9349864451,
                        "estimated_diameter_max": 87.0612763944
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-14",
                        "close_approach_date_full": "2025-Nov-14 23:08",
                        "epoch_date_close_approach": 1763161680000,
                        "relative_velocity": {
                            "kilometers_per_second": "9.7798182237",
                            "kilometers_per_hour": "35207.3456052114",
                            "miles_per_hour": "21876.475384527"
                        },
                        "miss_distance": {
                            "astronomical": "0.0102617465",
                            "lunar": "3.9918193885",
                            "kilometers": "1535135.418879955",
                            "miles": "953888.916875179"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "3",
                    "orbit_determination_date": "2025-11-13 05:20:59",
                    "first_observation_date": "2025-11-10",
                    "last_observation_date": "2025-11-12",
                    "data_arc_in_days": 2,
                    "observations_used": 33,
                    "orbit_uncertainty": "7",
                    "minimum_orbit_intersection": ".00370014",
                    "jupiter_tisserand_invariant": "5.229",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".3455961689153728",
                    "semi_major_axis": "1.202538955442432",
                    "inclination": "1.46113252974876",
                    "ascending_node_longitude": "221.0831882318557",
                    "orbital_period": "481.6672937690244",
                    "perihelion_distance": ".7869460994700332",
                    "perihelion_argument": "270.3570329307615",
                    "aphelion_distance": "1.618131811414831",
                    "perihelion_time": "2461051.027101294215",
                    "mean_anomaly": "322.2358488914964",
                    "mean_motion": ".7474038712137098",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54561377?"
                },
                "id": "54561377",
                "neo_reference_id": "54561377",
                "name": "(2025 VA2)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54561377",
                "absolute_magnitude_h": 28.146,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0062424486,
                        "estimated_diameter_max": 0.0139585395
                    },
                    "meters": {
                        "estimated_diameter_min": 6.2424486219,
                        "estimated_diameter_max": 13.9585394647
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0038788765,
                        "estimated_diameter_max": 0.0086734316
                    },
                    "feet": {
                        "estimated_diameter_min": 20.4804751368,
                        "estimated_diameter_max": 45.7957346175
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-14",
                        "close_approach_date_full": "2025-Nov-14 08:51",
                        "epoch_date_close_approach": 1763110260000,
                        "relative_velocity": {
                            "kilometers_per_second": "5.7767883475",
                            "kilometers_per_hour": "20796.4380510656",
                            "miles_per_hour": "12922.0978545635"
                        },
                        "miss_distance": {
                            "astronomical": "0.0131123899",
                            "lunar": "5.1007196711",
                            "kilometers": "1961585.599649513",
                            "miles": "1218872.7717407594"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "2",
                    "orbit_determination_date": "2025-11-13 05:20:59",
                    "first_observation_date": "2025-11-11",
                    "last_observation_date": "2025-11-13",
                    "data_arc_in_days": 2,
                    "observations_used": 24,
                    "orbit_uncertainty": "5",
                    "minimum_orbit_intersection": ".0120114",
                    "jupiter_tisserand_invariant": "6.238",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".1833629301606598",
                    "semi_major_axis": ".9643092286647633",
                    "inclination": "5.850804495550682",
                    "ascending_node_longitude": "46.1681020426991",
                    "orbital_period": "345.87797805077",
                    "perihelion_distance": ".7874906629158267",
                    "perihelion_argument": "116.2391011832567",
                    "aphelion_distance": "1.1411277944137",
                    "perihelion_time": "2461080.578134876838",
                    "mean_anomaly": "276.652315599491",
                    "mean_motion": "1.040829491454807",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "ATE",
                        "orbit_class_description": "Near-Earth asteroid orbits similar to that of 2062 Aten",
                        "orbit_class_range": "a (semi-major axis) < 1.0 AU; q (perihelion) > 0.983 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54561507?"
                },
                "id": "54561507",
                "neo_reference_id": "54561507",
                "name": "(2025 VS2)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54561507",
                "absolute_magnitude_h": 29.881,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0028077276,
                        "estimated_diameter_max": 0.0062782699
                    },
                    "meters": {
                        "estimated_diameter_min": 2.8077276354,
                        "estimated_diameter_max": 6.278269855
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0017446405,
                        "estimated_diameter_max": 0.0039011348
                    },
                    "feet": {
                        "estimated_diameter_min": 9.2117051352,
                        "estimated_diameter_max": 20.597998871
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-14",
                        "close_approach_date_full": "2025-Nov-14 01:21",
                        "epoch_date_close_approach": 1763083260000,
                        "relative_velocity": {
                            "kilometers_per_second": "6.6180540661",
                            "kilometers_per_hour": "23824.9946380311",
                            "miles_per_hour": "14803.9251405033"
                        },
                        "miss_distance": {
                            "astronomical": "0.0022663488",
                            "lunar": "0.8816096832",
                            "kilometers": "339040.953157056",
                            "miles": "210670.2793811328"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "3",
                    "orbit_determination_date": "2025-11-14 05:39:13",
                    "first_observation_date": "2025-11-12",
                    "last_observation_date": "2025-11-14",
                    "data_arc_in_days": 2,
                    "observations_used": 27,
                    "orbit_uncertainty": "5",
                    "minimum_orbit_intersection": ".00168487",
                    "jupiter_tisserand_invariant": "6.130",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".2089263309288448",
                    "semi_major_axis": ".9851303574686391",
                    "inclination": "5.141954427832951",
                    "ascending_node_longitude": "50.54807508009812",
                    "orbital_period": "357.1403997598578",
                    "perihelion_distance": ".7793106863960951",
                    "perihelion_argument": "104.3982288308438",
                    "aphelion_distance": "1.190950028541183",
                    "perihelion_time": "2461072.404610011813",
                    "mean_anomaly": "287.5196543945794",
                    "mean_motion": "1.0080069357655",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "ATE",
                        "orbit_class_description": "Near-Earth asteroid orbits similar to that of 2062 Aten",
                        "orbit_class_range": "a (semi-major axis) < 1.0 AU; q (perihelion) > 0.983 AU"
                    }
                },
                "is_sentry_object": false
            }
        ],
        "2025-11-11": [
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/2348306?"
                },
                "id": "2348306",
                "neo_reference_id": "2348306",
                "name": "348306 (2005 AY28)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=2348306",
                "absolute_magnitude_h": 21.55,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.1301832102,
                        "estimated_diameter_max": 0.2910985075
                    },
                    "meters": {
                        "estimated_diameter_min": 130.1832101881,
                        "estimated_diameter_max": 291.0985075098
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0808920715,
                        "estimated_diameter_max": 0.1808801707
                    },
                    "feet": {
                        "estimated_diameter_min": 427.1102833136,
                        "estimated_diameter_max": 955.0476273785
                    }
                },
                "is_potentially_hazardous_asteroid": true,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-11",
                        "close_approach_date_full": "2025-Nov-11 08:58",
                        "epoch_date_close_approach": 1762851480000,
                        "relative_velocity": {
                            "kilometers_per_second": "14.3525070791",
                            "kilometers_per_hour": "51669.0254846754",
                            "miles_per_hour": "32105.1230851862"
                        },
                        "miss_distance": {
                            "astronomical": "0.146521861",
                            "lunar": "56.997003929",
                            "kilometers": "21919358.31403607",
                            "miles": "13620057.685874966"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "70",
                    "orbit_determination_date": "2025-11-13 05:21:47",
                    "first_observation_date": "2005-01-13",
                    "last_observation_date": "2025-11-12",
                    "data_arc_in_days": 7608,
                    "observations_used": 250,
                    "orbit_uncertainty": "0",
                    "minimum_orbit_intersection": ".036095",
                    "jupiter_tisserand_invariant": "6.632",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".5702931501940472",
                    "semi_major_axis": ".8726532370446564",
                    "inclination": "5.884961337000107",
                    "ascending_node_longitude": "117.4038465545628",
                    "orbital_period": "297.756316265616",
                    "perihelion_distance": ".3749850734634266",
                    "perihelion_argument": "156.0532743337392",
                    "aphelion_distance": "1.370321400625886",
                    "perihelion_time": "2460924.122046470211",
                    "mean_anomaly": "92.34418136136527",
                    "mean_motion": "1.209042362274724",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "ATE",
                        "orbit_class_description": "Near-Earth asteroid orbits similar to that of 2062 Aten",
                        "orbit_class_range": "a (semi-major axis) < 1.0 AU; q (perihelion) > 0.983 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3576729?"
                },
                "id": "3576729",
                "neo_reference_id": "3576729",
                "name": "(2011 OB57)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3576729",
                "absolute_magnitude_h": 26.0,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0167708462,
                        "estimated_diameter_max": 0.0375007522
                    },
                    "meters": {
                        "estimated_diameter_min": 16.7708462163,
                        "estimated_diameter_max": 37.5007521798
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0104209175,
                        "estimated_diameter_max": 0.0233018799
                    },
                    "feet": {
                        "estimated_diameter_min": 55.0224631002,
                        "estimated_diameter_max": 123.0339677816
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-11",
                        "close_approach_date_full": "2025-Nov-11 17:15",
                        "epoch_date_close_approach": 1762881300000,
                        "relative_velocity": {
                            "kilometers_per_second": "4.52255694",
                            "kilometers_per_hour": "16281.2049838257",
                            "miles_per_hour": "10116.5076189777"
                        },
                        "miss_distance": {
                            "astronomical": "0.1149842808",
                            "lunar": "44.7288852312",
                            "kilometers": "17201403.491161896",
                            "miles": "10688456.4990943248"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "6",
                    "orbit_determination_date": "2021-04-15 05:12:00",
                    "first_observation_date": "2011-07-22",
                    "last_observation_date": "2011-08-19",
                    "data_arc_in_days": 28,
                    "observations_used": 12,
                    "orbit_uncertainty": "5",
                    "minimum_orbit_intersection": ".0232188",
                    "jupiter_tisserand_invariant": "6.300",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".2423034213757597",
                    "semi_major_axis": ".9506768404538295",
                    "inclination": "4.912649363485781",
                    "ascending_node_longitude": "296.0543850081999",
                    "orbital_period": "338.5694734349912",
                    "perihelion_distance": ".7203245893891693",
                    "perihelion_argument": "223.7363380974247",
                    "aphelion_distance": "1.18102909151849",
                    "perihelion_time": "2461074.328376417421",
                    "mean_anomaly": "281.4984882109435",
                    "mean_motion": "1.063297279425647",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "ATE",
                        "orbit_class_description": "Near-Earth asteroid orbits similar to that of 2062 Aten",
                        "orbit_class_range": "a (semi-major axis) < 1.0 AU; q (perihelion) > 0.983 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3617076?"
                },
                "id": "3617076",
                "neo_reference_id": "3617076",
                "name": "(2012 VC26)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3617076",
                "absolute_magnitude_h": 28.7,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0048367649,
                        "estimated_diameter_max": 0.0108153351
                    },
                    "meters": {
                        "estimated_diameter_min": 4.8367648822,
                        "estimated_diameter_max": 10.8153350678
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0030054254,
                        "estimated_diameter_max": 0.0067203356
                    },
                    "feet": {
                        "estimated_diameter_min": 15.8686516961,
                        "estimated_diameter_max": 35.4833839037
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-11",
                        "close_approach_date_full": "2025-Nov-11 14:57",
                        "epoch_date_close_approach": 1762873020000,
                        "relative_velocity": {
                            "kilometers_per_second": "6.4397323609",
                            "kilometers_per_hour": "23183.036499213",
                            "miles_per_hour": "14405.0373180804"
                        },
                        "miss_distance": {
                            "astronomical": "0.0341519904",
                            "lunar": "13.2851242656",
                            "kilometers": "5109065.020100448",
                            "miles": "3174625.7941362624"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "6",
                    "orbit_determination_date": "2021-04-15 07:11:35",
                    "first_observation_date": "2012-11-06",
                    "last_observation_date": "2012-11-10",
                    "data_arc_in_days": 4,
                    "observations_used": 28,
                    "orbit_uncertainty": "5",
                    "minimum_orbit_intersection": ".00292569",
                    "jupiter_tisserand_invariant": "6.319",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".1953132612957423",
                    "semi_major_axis": ".9492224030311203",
                    "inclination": "1.481202890386706",
                    "ascending_node_longitude": "42.66054759686754",
                    "orbital_period": "337.7928061665103",
                    "perihelion_distance": ".7638266798001307",
                    "perihelion_argument": "120.0011592969054",
                    "aphelion_distance": "1.13461812626211",
                    "perihelion_time": "2461075.329353825992",
                    "mean_anomaly": "280.2512105480476",
                    "mean_motion": "1.065742056752218",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "ATE",
                        "orbit_class_description": "Near-Earth asteroid orbits similar to that of 2062 Aten",
                        "orbit_class_range": "a (semi-major axis) < 1.0 AU; q (perihelion) > 0.983 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3791243?"
                },
                "id": "3791243",
                "neo_reference_id": "3791243",
                "name": "(2017 XA1)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3791243",
                "absolute_magnitude_h": 21.3,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.1460679643,
                        "estimated_diameter_max": 0.3266178974
                    },
                    "meters": {
                        "estimated_diameter_min": 146.0679642714,
                        "estimated_diameter_max": 326.6178974458
                    },
                    "miles": {
                        "estimated_diameter_min": 0.090762397,
                        "estimated_diameter_max": 0.2029508896
                    },
                    "feet": {
                        "estimated_diameter_min": 479.2256199,
                        "estimated_diameter_max": 1071.581062656
                    }
                },
                "is_potentially_hazardous_asteroid": true,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-11",
                        "close_approach_date_full": "2025-Nov-11 00:52",
                        "epoch_date_close_approach": 1762822320000,
                        "relative_velocity": {
                            "kilometers_per_second": "13.6551139299",
                            "kilometers_per_hour": "49158.4101476638",
                            "miles_per_hour": "30545.1243498081"
                        },
                        "miss_distance": {
                            "astronomical": "0.3725052672",
                            "lunar": "144.9045489408",
                            "kilometers": "55725994.536900864",
                            "miles": "34626527.3518213632"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "7",
                    "orbit_determination_date": "2021-04-15 20:10:49",
                    "first_observation_date": "2017-12-05",
                    "last_observation_date": "2020-11-23",
                    "data_arc_in_days": 1084,
                    "observations_used": 30,
                    "orbit_uncertainty": "1",
                    "minimum_orbit_intersection": ".0486722",
                    "jupiter_tisserand_invariant": "7.167",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".2016089815934647",
                    "semi_major_axis": ".8094394668347903",
                    "inclination": "17.17877610400886",
                    "ascending_node_longitude": "239.6213248839093",
                    "orbital_period": "265.9959295866953",
                    "perihelion_distance": ".6462492002646713",
                    "perihelion_argument": "327.6201207529416",
                    "aphelion_distance": ".9726297334049094",
                    "perihelion_time": "2461123.377352893712",
                    "mean_anomaly": "193.6972783362885",
                    "mean_motion": "1.353404168850885",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "IEO",
                        "orbit_class_description": "An asteroid orbit contained entirely within the orbit of the Earth - Interior Earth Object",
                        "orbit_class_range": "q (perihelion) < 0.983 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3869320?"
                },
                "id": "3869320",
                "neo_reference_id": "3869320",
                "name": "(2019 SE5)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3869320",
                "absolute_magnitude_h": 26.66,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0123752784,
                        "estimated_diameter_max": 0.0276719637
                    },
                    "meters": {
                        "estimated_diameter_min": 12.3752783658,
                        "estimated_diameter_max": 27.6719636665
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0076896391,
                        "estimated_diameter_max": 0.0171945557
                    },
                    "feet": {
                        "estimated_diameter_min": 40.6013082738,
                        "estimated_diameter_max": 90.7872852756
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-11",
                        "close_approach_date_full": "2025-Nov-11 06:17",
                        "epoch_date_close_approach": 1762841820000,
                        "relative_velocity": {
                            "kilometers_per_second": "10.4162115106",
                            "kilometers_per_hour": "37498.3614381866",
                            "miles_per_hour": "23300.0235280777"
                        },
                        "miss_distance": {
                            "astronomical": "0.1944785255",
                            "lunar": "75.6521464195",
                            "kilometers": "29093573.175540685",
                            "miles": "18077908.087544053"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "10",
                    "orbit_determination_date": "2024-07-12 05:47:49",
                    "first_observation_date": "2019-09-25",
                    "last_observation_date": "2019-10-05",
                    "data_arc_in_days": 10,
                    "observations_used": 79,
                    "orbit_uncertainty": "7",
                    "minimum_orbit_intersection": ".0138093",
                    "jupiter_tisserand_invariant": "4.280",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".3676315498532385",
                    "semi_major_axis": "1.596270207584122",
                    "inclination": "7.81254260201615",
                    "ascending_node_longitude": "185.038110994197",
                    "orbital_period": "736.6446500489517",
                    "perihelion_distance": "1.00943091718542",
                    "perihelion_argument": "193.4485410127047",
                    "aphelion_distance": "2.183109497982823",
                    "perihelion_time": "2460972.471134923087",
                    "mean_anomaly": "13.69777331175629",
                    "mean_motion": ".4887023885615366",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54098026?"
                },
                "id": "54098026",
                "neo_reference_id": "54098026",
                "name": "(2020 XR1)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54098026",
                "absolute_magnitude_h": 23.8,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.046190746,
                        "estimated_diameter_max": 0.1032856481
                    },
                    "meters": {
                        "estimated_diameter_min": 46.1907460282,
                        "estimated_diameter_max": 103.2856480504
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0287015901,
                        "estimated_diameter_max": 0.0641787064
                    },
                    "feet": {
                        "estimated_diameter_min": 151.544447199,
                        "estimated_diameter_max": 338.8636855496
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-11",
                        "close_approach_date_full": "2025-Nov-11 12:51",
                        "epoch_date_close_approach": 1762865460000,
                        "relative_velocity": {
                            "kilometers_per_second": "18.7126950161",
                            "kilometers_per_hour": "67365.7020580036",
                            "miles_per_hour": "41858.4274815412"
                        },
                        "miss_distance": {
                            "astronomical": "0.4877417469",
                            "lunar": "189.7315395441",
                            "kilometers": "72965126.446319103",
                            "miles": "45338427.2029375014"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "5",
                    "orbit_determination_date": "2021-04-15 23:19:44",
                    "first_observation_date": "2020-12-06",
                    "last_observation_date": "2020-12-19",
                    "data_arc_in_days": 13,
                    "observations_used": 27,
                    "orbit_uncertainty": "8",
                    "minimum_orbit_intersection": ".0702404",
                    "jupiter_tisserand_invariant": "6.985",
                    "epoch_osculation": "2459192.5",
                    "eccentricity": ".4658016260541774",
                    "semi_major_axis": ".8111618864178247",
                    "inclination": "35.2959944441349",
                    "ascending_node_longitude": "74.63055795372162",
                    "orbital_period": "266.8454067741661",
                    "perihelion_distance": ".433321360731228",
                    "perihelion_argument": "150.9454013743428",
                    "aphelion_distance": "1.189002412104421",
                    "perihelion_time": "2459278.212829570431",
                    "mean_anomaly": "244.3651872506488",
                    "mean_motion": "1.349095734312832",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "ATE",
                        "orbit_class_description": "Near-Earth asteroid orbits similar to that of 2062 Aten",
                        "orbit_class_range": "a (semi-major axis) < 1.0 AU; q (perihelion) > 0.983 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54212444?"
                },
                "id": "54212444",
                "neo_reference_id": "54212444",
                "name": "(2021 UB1)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54212444",
                "absolute_magnitude_h": 27.28,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0093015425,
                        "estimated_diameter_max": 0.0207988814
                    },
                    "meters": {
                        "estimated_diameter_min": 9.3015425396,
                        "estimated_diameter_max": 20.7988814142
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0057797088,
                        "estimated_diameter_max": 0.0129238217
                    },
                    "feet": {
                        "estimated_diameter_min": 30.5168728257,
                        "estimated_diameter_max": 68.2378020989
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-11",
                        "close_approach_date_full": "2025-Nov-11 21:44",
                        "epoch_date_close_approach": 1762897440000,
                        "relative_velocity": {
                            "kilometers_per_second": "20.3606113248",
                            "kilometers_per_hour": "73298.2007692656",
                            "miles_per_hour": "45544.6514724362"
                        },
                        "miss_distance": {
                            "astronomical": "0.4185067382",
                            "lunar": "162.7991211598",
                            "kilometers": "62607716.615367634",
                            "miles": "38902631.1658119892"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "4",
                    "orbit_determination_date": "2021-11-03 05:52:05",
                    "first_observation_date": "2021-10-24",
                    "last_observation_date": "2021-10-29",
                    "data_arc_in_days": 5,
                    "observations_used": 32,
                    "orbit_uncertainty": "7",
                    "minimum_orbit_intersection": ".0214015",
                    "jupiter_tisserand_invariant": "5.173",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".2745446237504544",
                    "semi_major_axis": "1.224666048319902",
                    "inclination": "7.701893783893521",
                    "ascending_node_longitude": "215.5531353986551",
                    "orbital_period": "495.0225053381499",
                    "perihelion_distance": ".8884405688639588",
                    "perihelion_argument": "109.1933305245298",
                    "aphelion_distance": "1.560891527775845",
                    "perihelion_time": "2460942.250400264662",
                    "mean_anomaly": "42.36141928617422",
                    "mean_motion": ".7272396630817501",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54268448?"
                },
                "id": "54268448",
                "neo_reference_id": "54268448",
                "name": "(2022 GQ)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54268448",
                "absolute_magnitude_h": 30.4,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0022108281,
                        "estimated_diameter_max": 0.0049435619
                    },
                    "meters": {
                        "estimated_diameter_min": 2.2108281036,
                        "estimated_diameter_max": 4.9435619262
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0013737445,
                        "estimated_diameter_max": 0.003071786
                    },
                    "feet": {
                        "estimated_diameter_min": 7.2533732754,
                        "estimated_diameter_max": 16.2190357099
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-11",
                        "close_approach_date_full": "2025-Nov-11 21:08",
                        "epoch_date_close_approach": 1762895280000,
                        "relative_velocity": {
                            "kilometers_per_second": "16.94316044",
                            "kilometers_per_hour": "60995.3775840994",
                            "miles_per_hour": "37900.1555882977"
                        },
                        "miss_distance": {
                            "astronomical": "0.3702872671",
                            "lunar": "144.0417469019",
                            "kilometers": "55394186.446281077",
                            "miles": "34420351.3648177826"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "5",
                    "orbit_determination_date": "2022-04-08 05:54:14",
                    "first_observation_date": "2022-04-02",
                    "last_observation_date": "2022-04-07",
                    "data_arc_in_days": 5,
                    "observations_used": 47,
                    "orbit_uncertainty": "6",
                    "minimum_orbit_intersection": ".000523088",
                    "jupiter_tisserand_invariant": "5.303",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".2437361749037577",
                    "semi_major_axis": "1.18917022087753",
                    "inclination": "1.596705235494168",
                    "ascending_node_longitude": "190.8939720573306",
                    "orbital_period": "473.6575502795351",
                    "perihelion_distance": ".8993264199313842",
                    "perihelion_argument": "299.9923899271606",
                    "aphelion_distance": "1.479014021823676",
                    "perihelion_time": "2461041.471632622575",
                    "mean_anomaly": "328.8598065513317",
                    "mean_motion": ".7600427772924581",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": true,
                "sentry_data": "http://api.nasa.gov/neo/rest/v1/neo/sentry/54268448?"
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54554638?"
                },
                "id": "54554638",
                "neo_reference_id": "54554638",
                "name": "(2025 UL6)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54554638",
                "absolute_magnitude_h": 22.61,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0799015081,
                        "estimated_diameter_max": 0.1786652037
                    },
                    "meters": {
                        "estimated_diameter_min": 79.9015081239,
                        "estimated_diameter_max": 178.6652036697
                    },
                    "miles": {
                        "estimated_diameter_min": 0.04964848,
                        "estimated_diameter_max": 0.1110173763
                    },
                    "feet": {
                        "estimated_diameter_min": 262.1440639131,
                        "estimated_diameter_max": 586.1719468077
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-11",
                        "close_approach_date_full": "2025-Nov-11 21:04",
                        "epoch_date_close_approach": 1762895040000,
                        "relative_velocity": {
                            "kilometers_per_second": "17.3802242644",
                            "kilometers_per_hour": "62568.8073518148",
                            "miles_per_hour": "38877.8236570207"
                        },
                        "miss_distance": {
                            "astronomical": "0.1657418206",
                            "lunar": "64.4735682134",
                            "kilometers": "24794623.331682122",
                            "miles": "15406664.5217804036"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "5",
                    "orbit_determination_date": "2025-11-09 05:19:10",
                    "first_observation_date": "2025-10-24",
                    "last_observation_date": "2025-11-09",
                    "data_arc_in_days": 16,
                    "observations_used": 37,
                    "orbit_uncertainty": "8",
                    "minimum_orbit_intersection": ".0999968",
                    "jupiter_tisserand_invariant": "3.299",
                    "epoch_osculation": "2460974.5",
                    "eccentricity": ".7024242098689667",
                    "semi_major_axis": "2.170518203102097",
                    "inclination": "11.16968858324769",
                    "ascending_node_longitude": "357.025973740928",
                    "orbital_period": "1168.001970568723",
                    "perihelion_distance": ".6458936692818973",
                    "perihelion_argument": "130.3270765954534",
                    "aphelion_distance": "3.695142736922298",
                    "perihelion_time": "2461037.225431482168",
                    "mean_anomaly": "340.6668516812645",
                    "mean_motion": ".3082186580770142",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54555164?"
                },
                "id": "54555164",
                "neo_reference_id": "54555164",
                "name": "(2025 UP9)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54555164",
                "absolute_magnitude_h": 24.416,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0347820341,
                        "estimated_diameter_max": 0.0777749927
                    },
                    "meters": {
                        "estimated_diameter_min": 34.7820341059,
                        "estimated_diameter_max": 77.7749926565
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0216125473,
                        "estimated_diameter_max": 0.048327125
                    },
                    "feet": {
                        "estimated_diameter_min": 114.114288776,
                        "estimated_diameter_max": 255.1673069071
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-11",
                        "close_approach_date_full": "2025-Nov-11 23:25",
                        "epoch_date_close_approach": 1762903500000,
                        "relative_velocity": {
                            "kilometers_per_second": "13.9975527333",
                            "kilometers_per_hour": "50391.189839871",
                            "miles_per_hour": "31311.1257091132"
                        },
                        "miss_distance": {
                            "astronomical": "0.0462002061",
                            "lunar": "17.9718801729",
                            "kilometers": "6911452.426121007",
                            "miles": "4294577.3953916166"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "4",
                    "orbit_determination_date": "2025-11-12 06:10:02",
                    "first_observation_date": "2025-10-28",
                    "last_observation_date": "2025-11-11",
                    "data_arc_in_days": 14,
                    "observations_used": 38,
                    "orbit_uncertainty": "8",
                    "minimum_orbit_intersection": ".00893895",
                    "jupiter_tisserand_invariant": "4.542",
                    "epoch_osculation": "2460977.5",
                    "eccentricity": ".4766334715870424",
                    "semi_major_axis": "1.438270717471831",
                    "inclination": "1.756863031423873",
                    "ascending_node_longitude": "187.4169948484883",
                    "orbital_period": "630.0273234418194",
                    "perihelion_distance": ".7527427523212462",
                    "perihelion_argument": "300.1065984752303",
                    "aphelion_distance": "2.123798682622417",
                    "perihelion_time": "2461041.932161037936",
                    "mean_anomaly": "323.183219027803",
                    "mean_motion": ".5714037893362011",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54561043?"
                },
                "id": "54561043",
                "neo_reference_id": "54561043",
                "name": "(2025 VX)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54561043",
                "absolute_magnitude_h": 27.072,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0102365822,
                        "estimated_diameter_max": 0.0228896936
                    },
                    "meters": {
                        "estimated_diameter_min": 10.236582163,
                        "estimated_diameter_max": 22.8896935736
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0063607153,
                        "estimated_diameter_max": 0.0142229918
                    },
                    "feet": {
                        "estimated_diameter_min": 33.5845882235,
                        "estimated_diameter_max": 75.0974222641
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-11",
                        "close_approach_date_full": "2025-Nov-11 10:33",
                        "epoch_date_close_approach": 1762857180000,
                        "relative_velocity": {
                            "kilometers_per_second": "6.3730117818",
                            "kilometers_per_hour": "22942.8424146144",
                            "miles_per_hour": "14255.7900547919"
                        },
                        "miss_distance": {
                            "astronomical": "0.0030819389",
                            "lunar": "1.1988742321",
                            "kilometers": "461051.494910143",
                            "miles": "286484.1144922534"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "3",
                    "orbit_determination_date": "2025-11-13 05:20:53",
                    "first_observation_date": "2025-11-09",
                    "last_observation_date": "2025-11-09",
                    "data_arc_in_days": null,
                    "observations_used": 28,
                    "orbit_uncertainty": "6",
                    "minimum_orbit_intersection": ".00250604",
                    "jupiter_tisserand_invariant": "6.840",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".2552058780199027",
                    "semi_major_axis": ".8594019996276774",
                    "inclination": "2.534966405496022",
                    "ascending_node_longitude": "52.32352768659353",
                    "orbital_period": "290.9999850319451",
                    "perihelion_distance": ".6400775577406359",
                    "perihelion_argument": "134.2063064139239",
                    "aphelion_distance": "1.078726441514719",
                    "perihelion_time": "2461083.848001270706",
                    "mean_anomaly": "256.8890652892641",
                    "mean_motion": "1.237113465694784",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "ATE",
                        "orbit_class_description": "Near-Earth asteroid orbits similar to that of 2062 Aten",
                        "orbit_class_range": "a (semi-major axis) < 1.0 AU; q (perihelion) > 0.983 AU"
                    }
                },
                "is_sentry_object": true,
                "sentry_data": "http://api.nasa.gov/neo/rest/v1/neo/sentry/54561043?"
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54561513?"
                },
                "id": "54561513",
                "neo_reference_id": "54561513",
                "name": "(2025 VX2)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54561513",
                "absolute_magnitude_h": 25.212,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0241076555,
                        "estimated_diameter_max": 0.0539063565
                    },
                    "meters": {
                        "estimated_diameter_min": 24.1076554924,
                        "estimated_diameter_max": 53.9063564592
                    },
                    "miles": {
                        "estimated_diameter_min": 0.014979798,
                        "estimated_diameter_max": 0.0334958466
                    },
                    "feet": {
                        "estimated_diameter_min": 79.0933604458,
                        "estimated_diameter_max": 176.8581305256
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-11",
                        "close_approach_date_full": "2025-Nov-11 06:09",
                        "epoch_date_close_approach": 1762841340000,
                        "relative_velocity": {
                            "kilometers_per_second": "9.2971964915",
                            "kilometers_per_hour": "33469.907369484",
                            "miles_per_hour": "20796.8988318885"
                        },
                        "miss_distance": {
                            "astronomical": "0.1052541363",
                            "lunar": "40.9438590207",
                            "kilometers": "15745794.599169681",
                            "miles": "9783983.0746003578"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "1",
                    "orbit_determination_date": "2025-11-13 04:12:03",
                    "first_observation_date": "2025-11-10",
                    "last_observation_date": "2025-11-12",
                    "data_arc_in_days": 2,
                    "observations_used": 19,
                    "orbit_uncertainty": "6",
                    "minimum_orbit_intersection": ".104211",
                    "jupiter_tisserand_invariant": "6.304",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".1765391591987258",
                    "semi_major_axis": ".9458601965876399",
                    "inclination": "16.98173313919015",
                    "ascending_node_longitude": "45.2794578006808",
                    "orbital_period": "335.9996707879961",
                    "perihelion_distance": ".7788788327625163",
                    "perihelion_argument": "159.8375042699243",
                    "aphelion_distance": "1.112841560412763",
                    "perihelion_time": "2461128.494818429725",
                    "mean_anomaly": "222.8625601726415",
                    "mean_motion": "1.071429621212776",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "ATE",
                        "orbit_class_description": "Near-Earth asteroid orbits similar to that of 2062 Aten",
                        "orbit_class_range": "a (semi-major axis) < 1.0 AU; q (perihelion) > 0.983 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54561595?"
                },
                "id": "54561595",
                "neo_reference_id": "54561595",
                "name": "(2025 VA3)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54561595",
                "absolute_magnitude_h": 26.288,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.01468774,
                        "estimated_diameter_max": 0.0328427851
                    },
                    "meters": {
                        "estimated_diameter_min": 14.6877400166,
                        "estimated_diameter_max": 32.8427851131
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0091265357,
                        "estimated_diameter_max": 0.0204075542
                    },
                    "feet": {
                        "estimated_diameter_min": 48.1881249562,
                        "estimated_diameter_max": 107.7519231104
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-11",
                        "close_approach_date_full": "2025-Nov-11 16:23",
                        "epoch_date_close_approach": 1762878180000,
                        "relative_velocity": {
                            "kilometers_per_second": "20.4517686576",
                            "kilometers_per_hour": "73626.3671672812",
                            "miles_per_hour": "45748.5613101365"
                        },
                        "miss_distance": {
                            "astronomical": "0.0286563134",
                            "lunar": "11.1473059126",
                            "kilometers": "4286923.446692458",
                            "miles": "2663770.7090856004"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "2",
                    "orbit_determination_date": "2025-11-14 05:39:13",
                    "first_observation_date": "2025-11-12",
                    "last_observation_date": "2025-11-13",
                    "data_arc_in_days": 1,
                    "observations_used": 31,
                    "orbit_uncertainty": "8",
                    "minimum_orbit_intersection": ".0262493",
                    "jupiter_tisserand_invariant": "3.950",
                    "epoch_osculation": "2460992.5",
                    "eccentricity": ".4010270317650493",
                    "semi_major_axis": "1.678037425067271",
                    "inclination": "35.26598900895328",
                    "ascending_node_longitude": "48.98361808964431",
                    "orbital_period": "793.9641457994242",
                    "perihelion_distance": "1.005099057301877",
                    "perihelion_argument": "343.8255207412559",
                    "aphelion_distance": "2.350975792832665",
                    "perihelion_time": "2460977.582816190469",
                    "mean_anomaly": "6.763764081593437",
                    "mean_motion": ".4534209786482541",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54561598?"
                },
                "id": "54561598",
                "neo_reference_id": "54561598",
                "name": "(2025 VM3)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54561598",
                "absolute_magnitude_h": 27.232,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0095094407,
                        "estimated_diameter_max": 0.0212637559
                    },
                    "meters": {
                        "estimated_diameter_min": 9.5094407449,
                        "estimated_diameter_max": 21.2637559336
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0059088907,
                        "estimated_diameter_max": 0.0132126813
                    },
                    "feet": {
                        "estimated_diameter_min": 31.1989535735,
                        "estimated_diameter_max": 69.7629810172
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-11",
                        "close_approach_date_full": "2025-Nov-11 16:49",
                        "epoch_date_close_approach": 1762879740000,
                        "relative_velocity": {
                            "kilometers_per_second": "16.7003745319",
                            "kilometers_per_hour": "60121.3483147406",
                            "miles_per_hour": "37357.0677903454"
                        },
                        "miss_distance": {
                            "astronomical": "0.0057279502",
                            "lunar": "2.2281726278",
                            "kilometers": "856889.149386074",
                            "miles": "532446.2275688612"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "2",
                    "orbit_determination_date": "2025-11-14 05:39:13",
                    "first_observation_date": "2025-11-13",
                    "last_observation_date": "2025-11-14",
                    "data_arc_in_days": 1,
                    "observations_used": 33,
                    "orbit_uncertainty": "8",
                    "minimum_orbit_intersection": ".00431336",
                    "jupiter_tisserand_invariant": "3.442",
                    "epoch_osculation": "2460992.5",
                    "eccentricity": ".6415780071919276",
                    "semi_major_axis": "2.109542022162703",
                    "inclination": "2.563106606020587",
                    "ascending_node_longitude": "234.3930447046762",
                    "orbital_period": "1119.130413579588",
                    "perihelion_distance": ".7561062554959268",
                    "perihelion_argument": "107.740756527949",
                    "aphelion_distance": "3.462977788829479",
                    "perihelion_time": "2460949.008108720456",
                    "mean_anomaly": "13.99039885848154",
                    "mean_motion": ".3216783277728323",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": true,
                "sentry_data": "http://api.nasa.gov/neo/rest/v1/neo/sentry/54561598?"
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54561647?"
                },
                "id": "54561647",
                "neo_reference_id": "54561647",
                "name": "(2025 VU3)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54561647",
                "absolute_magnitude_h": 27.32,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0091317703,
                        "estimated_diameter_max": 0.020419259
                    },
                    "meters": {
                        "estimated_diameter_min": 9.1317702552,
                        "estimated_diameter_max": 20.4192590455
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0056742172,
                        "estimated_diameter_max": 0.0126879354
                    },
                    "feet": {
                        "estimated_diameter_min": 29.959877124,
                        "estimated_diameter_max": 66.9923218468
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-11",
                        "close_approach_date_full": "2025-Nov-11 03:55",
                        "epoch_date_close_approach": 1762833300000,
                        "relative_velocity": {
                            "kilometers_per_second": "8.0238632554",
                            "kilometers_per_hour": "28885.9077195893",
                            "miles_per_hour": "17948.579716097"
                        },
                        "miss_distance": {
                            "astronomical": "0.0135971552",
                            "lunar": "5.2892933728",
                            "kilometers": "2034105.455979424",
                            "miles": "1263934.5209230912"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "1",
                    "orbit_determination_date": "2025-11-14 10:42:03",
                    "first_observation_date": "2025-11-14",
                    "last_observation_date": "2025-11-14",
                    "data_arc_in_days": null,
                    "observations_used": 20,
                    "orbit_uncertainty": "6",
                    "minimum_orbit_intersection": ".0134735",
                    "jupiter_tisserand_invariant": "6.172",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".1648300369658897",
                    "semi_major_axis": ".9752472945147249",
                    "inclination": "11.60241034069635",
                    "ascending_node_longitude": "231.1663685434594",
                    "orbital_period": "351.7795249995422",
                    "perihelion_distance": ".8144972469089788",
                    "perihelion_argument": "69.25386941776529",
                    "aphelion_distance": "1.135997342120471",
                    "perihelion_time": "2460903.205970709309",
                    "mean_anomaly": "99.56762135230711",
                    "mean_motion": "1.023368258856079",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "ATE",
                        "orbit_class_description": "Near-Earth asteroid orbits similar to that of 2062 Aten",
                        "orbit_class_range": "a (semi-major axis) < 1.0 AU; q (perihelion) > 0.983 AU"
                    }
                },
                "is_sentry_object": false
            }
        ],
        "2025-11-10": [
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/2138852?"
                },
                "id": "2138852",
                "neo_reference_id": "2138852",
                "name": "138852 (2000 WN10)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=2138852",
                "absolute_magnitude_h": 20.3,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.2315021222,
                        "estimated_diameter_max": 0.5176544822
                    },
                    "meters": {
                        "estimated_diameter_min": 231.5021222103,
                        "estimated_diameter_max": 517.6544821978
                    },
                    "miles": {
                        "estimated_diameter_min": 0.1438487052,
                        "estimated_diameter_max": 0.3216554833
                    },
                    "feet": {
                        "estimated_diameter_min": 759.5214226325,
                        "estimated_diameter_max": 1698.3415313737
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-10",
                        "close_approach_date_full": "2025-Nov-10 17:02",
                        "epoch_date_close_approach": 1762794120000,
                        "relative_velocity": {
                            "kilometers_per_second": "16.0835100322",
                            "kilometers_per_hour": "57900.6361159693",
                            "miles_per_hour": "35977.2035910588"
                        },
                        "miss_distance": {
                            "astronomical": "0.1726133986",
                            "lunar": "67.1466120554",
                            "kilometers": "25822596.764020982",
                            "miles": "16045417.5932622716"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "304",
                    "orbit_determination_date": "2025-11-14 05:39:17",
                    "first_observation_date": "2000-11-20",
                    "last_observation_date": "2025-11-13",
                    "data_arc_in_days": 9124,
                    "observations_used": 1403,
                    "orbit_uncertainty": "0",
                    "minimum_orbit_intersection": ".125131",
                    "jupiter_tisserand_invariant": "5.974",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".2980461319570994",
                    "semi_major_axis": "1.001753841646454",
                    "inclination": "21.51733982632015",
                    "ascending_node_longitude": "60.84885987713075",
                    "orbital_period": "366.2182236624989",
                    "perihelion_distance": ".7031849839705634",
                    "perihelion_argument": "225.4157844942484",
                    "aphelion_distance": "1.300322699322344",
                    "perihelion_time": "2460907.837786124560",
                    "mean_anomaly": "91.08885041696034",
                    "mean_motion": ".9830204417456039",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/2410777?"
                },
                "id": "2410777",
                "neo_reference_id": "2410777",
                "name": "410777 (2009 FD)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=2410777",
                "absolute_magnitude_h": 22.18,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0973991073,
                        "estimated_diameter_max": 0.217791025
                    },
                    "meters": {
                        "estimated_diameter_min": 97.3991073414,
                        "estimated_diameter_max": 217.7910249632
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0605209807,
                        "estimated_diameter_max": 0.135329027
                    },
                    "feet": {
                        "estimated_diameter_min": 319.5508873299,
                        "estimated_diameter_max": 714.5375063401
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-10",
                        "close_approach_date_full": "2025-Nov-10 05:22",
                        "epoch_date_close_approach": 1762752120000,
                        "relative_velocity": {
                            "kilometers_per_second": "25.3729599626",
                            "kilometers_per_hour": "91342.6558653852",
                            "miles_per_hour": "56756.7741403556"
                        },
                        "miss_distance": {
                            "astronomical": "0.3126423672",
                            "lunar": "121.6178808408",
                            "kilometers": "46770632.204877864",
                            "miles": "29061923.2328239632"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "107",
                    "orbit_determination_date": "2024-04-10 06:21:37",
                    "first_observation_date": "2009-02-24",
                    "last_observation_date": "2024-04-09",
                    "data_arc_in_days": 5523,
                    "observations_used": 516,
                    "orbit_uncertainty": "0",
                    "minimum_orbit_intersection": ".00209876",
                    "jupiter_tisserand_invariant": "5.292",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".4931011610168173",
                    "semi_major_axis": "1.163958803205908",
                    "inclination": "3.124965174609973",
                    "ascending_node_longitude": "9.167917905770249",
                    "orbital_period": "458.6747583473826",
                    "perihelion_distance": ".5900093659693298",
                    "perihelion_argument": "281.6576181412743",
                    "aphelion_distance": "1.737908240442487",
                    "perihelion_time": "2460936.272236463610",
                    "mean_anomaly": "50.4104367033618",
                    "mean_motion": ".784869874455463",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3262691?"
                },
                "id": "3262691",
                "neo_reference_id": "3262691",
                "name": "(2004 WH1)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3262691",
                "absolute_magnitude_h": 23.97,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0427124985,
                        "estimated_diameter_max": 0.0955080501
                    },
                    "meters": {
                        "estimated_diameter_min": 42.7124985051,
                        "estimated_diameter_max": 95.5080501462
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0265403079,
                        "estimated_diameter_max": 0.0593459326
                    },
                    "feet": {
                        "estimated_diameter_min": 140.1328735954,
                        "estimated_diameter_max": 313.3466312417
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-10",
                        "close_approach_date_full": "2025-Nov-10 23:34",
                        "epoch_date_close_approach": 1762817640000,
                        "relative_velocity": {
                            "kilometers_per_second": "6.12710555",
                            "kilometers_per_hour": "22057.5799798566",
                            "miles_per_hour": "13705.7224047059"
                        },
                        "miss_distance": {
                            "astronomical": "0.0695013138",
                            "lunar": "27.0360110682",
                            "kilometers": "10397248.506681606",
                            "miles": "6460550.6423379228"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "10",
                    "orbit_determination_date": "2025-10-31 06:58:29",
                    "first_observation_date": "2004-11-18",
                    "last_observation_date": "2025-10-30",
                    "data_arc_in_days": 7651,
                    "observations_used": 46,
                    "orbit_uncertainty": "0",
                    "minimum_orbit_intersection": ".00189004",
                    "jupiter_tisserand_invariant": "5.282",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".2037067873216315",
                    "semi_major_axis": "1.198026891177016",
                    "inclination": "2.66579997296752",
                    "ascending_node_longitude": "238.7863062002788",
                    "orbital_period": "478.9589317652563",
                    "perihelion_distance": ".9539806820504241",
                    "perihelion_argument": "219.5811272570567",
                    "aphelion_distance": "1.442073100303607",
                    "perihelion_time": "2461031.612238789362",
                    "mean_anomaly": "336.6151015852444",
                    "mean_motion": ".75163020485531",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3358222?"
                },
                "id": "3358222",
                "neo_reference_id": "3358222",
                "name": "(2006 VX2)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3358222",
                "absolute_magnitude_h": 24.78,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0294140602,
                        "estimated_diameter_max": 0.0657718381
                    },
                    "meters": {
                        "estimated_diameter_min": 29.4140601781,
                        "estimated_diameter_max": 65.7718380526
                    },
                    "miles": {
                        "estimated_diameter_min": 0.018277044,
                        "estimated_diameter_max": 0.0408687128
                    },
                    "feet": {
                        "estimated_diameter_min": 96.5028251948,
                        "estimated_diameter_max": 215.7868771564
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-10",
                        "close_approach_date_full": "2025-Nov-10 23:34",
                        "epoch_date_close_approach": 1762817640000,
                        "relative_velocity": {
                            "kilometers_per_second": "15.8620725849",
                            "kilometers_per_hour": "57103.4613056584",
                            "miles_per_hour": "35481.8701651742"
                        },
                        "miss_distance": {
                            "astronomical": "0.225460605",
                            "lunar": "87.704175345",
                            "kilometers": "33728426.27691135",
                            "miles": "20957872.25902263"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "10",
                    "orbit_determination_date": "2021-04-15 00:12:38",
                    "first_observation_date": "2006-11-11",
                    "last_observation_date": "2015-11-03",
                    "data_arc_in_days": 3279,
                    "observations_used": 81,
                    "orbit_uncertainty": "2",
                    "minimum_orbit_intersection": ".0230569",
                    "jupiter_tisserand_invariant": "6.368",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".2907139142407297",
                    "semi_major_axis": ".9344372366943392",
                    "inclination": "9.812581572180303",
                    "ascending_node_longitude": "47.17287880526959",
                    "orbital_period": "329.931386076378",
                    "perihelion_distance": ".6627833300026366",
                    "perihelion_argument": "126.662961610753",
                    "aphelion_distance": "1.206091143386042",
                    "perihelion_time": "2461062.946557619268",
                    "mean_anomaly": "291.8623153429471",
                    "mean_motion": "1.091135960968143",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "ATE",
                        "orbit_class_description": "Near-Earth asteroid orbits similar to that of 2062 Aten",
                        "orbit_class_range": "a (semi-major axis) < 1.0 AU; q (perihelion) > 0.983 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3638502?"
                },
                "id": "3638502",
                "neo_reference_id": "3638502",
                "name": "(2013 JE29)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3638502",
                "absolute_magnitude_h": 23.59,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0508809225,
                        "estimated_diameter_max": 0.1137732014
                    },
                    "meters": {
                        "estimated_diameter_min": 50.8809224871,
                        "estimated_diameter_max": 113.773201439
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0316159297,
                        "estimated_diameter_max": 0.070695368
                    },
                    "feet": {
                        "estimated_diameter_min": 166.9321657324,
                        "estimated_diameter_max": 373.271670209
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-10",
                        "close_approach_date_full": "2025-Nov-10 14:30",
                        "epoch_date_close_approach": 1762785000000,
                        "relative_velocity": {
                            "kilometers_per_second": "27.1122029124",
                            "kilometers_per_hour": "97603.9304847916",
                            "miles_per_hour": "60647.2866948417"
                        },
                        "miss_distance": {
                            "astronomical": "0.4679558467",
                            "lunar": "182.0348243663",
                            "kilometers": "70005197.920366529",
                            "miles": "43499212.9024109402"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "16",
                    "orbit_determination_date": "2021-12-09 04:57:09",
                    "first_observation_date": "2013-05-15",
                    "last_observation_date": "2021-11-10",
                    "data_arc_in_days": 3101,
                    "observations_used": 54,
                    "orbit_uncertainty": "0",
                    "minimum_orbit_intersection": ".0119468",
                    "jupiter_tisserand_invariant": "4.205",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".4982302211179706",
                    "semi_major_axis": "1.604633180970786",
                    "inclination": "1.740270947885773",
                    "ascending_node_longitude": "45.02996080305896",
                    "orbital_period": "742.4412264235814",
                    "perihelion_distance": ".8051564364024788",
                    "perihelion_argument": "271.514652362898",
                    "aphelion_distance": "2.404109925539093",
                    "perihelion_time": "2460945.549203546154",
                    "mean_anomaly": "26.644919515957",
                    "mean_motion": ".4848868667142293",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3763956?"
                },
                "id": "3763956",
                "neo_reference_id": "3763956",
                "name": "(2016 WM1)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3763956",
                "absolute_magnitude_h": 24.8,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0291443905,
                        "estimated_diameter_max": 0.0651688382
                    },
                    "meters": {
                        "estimated_diameter_min": 29.1443904535,
                        "estimated_diameter_max": 65.1688382168
                    },
                    "miles": {
                        "estimated_diameter_min": 0.018109479,
                        "estimated_diameter_max": 0.0404940262
                    },
                    "feet": {
                        "estimated_diameter_min": 95.6180819754,
                        "estimated_diameter_max": 213.8085311752
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-10",
                        "close_approach_date_full": "2025-Nov-10 01:19",
                        "epoch_date_close_approach": 1762737540000,
                        "relative_velocity": {
                            "kilometers_per_second": "23.3579245423",
                            "kilometers_per_hour": "84088.5283521252",
                            "miles_per_hour": "52249.3414085747"
                        },
                        "miss_distance": {
                            "astronomical": "0.2929229332",
                            "lunar": "113.9470210148",
                            "kilometers": "43820646.880872284",
                            "miles": "27228887.3514901592"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "7",
                    "orbit_determination_date": "2021-04-15 18:14:51",
                    "first_observation_date": "2016-11-10",
                    "last_observation_date": "2016-11-24",
                    "data_arc_in_days": 14,
                    "observations_used": 27,
                    "orbit_uncertainty": "8",
                    "minimum_orbit_intersection": ".00698792",
                    "jupiter_tisserand_invariant": "5.212",
                    "epoch_osculation": "2457714.5",
                    "eccentricity": ".3522089290521002",
                    "semi_major_axis": "1.177775734795839",
                    "inclination": "26.87791038629062",
                    "ascending_node_longitude": "55.2394935029387",
                    "orbital_period": "466.8660897350488",
                    "perihelion_distance": ".7629526045798464",
                    "perihelion_argument": "91.85794903905496",
                    "aphelion_distance": "1.592598865011832",
                    "perihelion_time": "2457779.316164602321",
                    "mean_anomaly": "310.0203168105918",
                    "mean_motion": ".7710990537014664",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3770142?"
                },
                "id": "3770142",
                "neo_reference_id": "3770142",
                "name": "(2017 DS37)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3770142",
                "absolute_magnitude_h": 27.3,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0092162655,
                        "estimated_diameter_max": 0.0206081961
                    },
                    "meters": {
                        "estimated_diameter_min": 9.216265485,
                        "estimated_diameter_max": 20.6081961232
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0057267201,
                        "estimated_diameter_max": 0.0128053354
                    },
                    "feet": {
                        "estimated_diameter_min": 30.2370924539,
                        "estimated_diameter_max": 67.6121941689
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-10",
                        "close_approach_date_full": "2025-Nov-10 09:04",
                        "epoch_date_close_approach": 1762765440000,
                        "relative_velocity": {
                            "kilometers_per_second": "11.7584469823",
                            "kilometers_per_hour": "42330.4091364154",
                            "miles_per_hour": "26302.470054791"
                        },
                        "miss_distance": {
                            "astronomical": "0.262218768",
                            "lunar": "102.003100752",
                            "kilometers": "39227369.16682416",
                            "miles": "24374756.927767008"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "3",
                    "orbit_determination_date": "2021-04-15 18:38:27",
                    "first_observation_date": "2017-02-21",
                    "last_observation_date": "2017-02-27",
                    "data_arc_in_days": 6,
                    "observations_used": 45,
                    "orbit_uncertainty": "5",
                    "minimum_orbit_intersection": ".0187853",
                    "jupiter_tisserand_invariant": "6.381",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".137094227274555",
                    "semi_major_axis": ".9381563338040136",
                    "inclination": "7.137405153848065",
                    "ascending_node_longitude": "332.8420375810888",
                    "orbital_period": "331.9030545809817",
                    "perihelion_distance": ".8095405161584229",
                    "perihelion_argument": "313.8207768513697",
                    "aphelion_distance": "1.066772151449604",
                    "perihelion_time": "2460905.135101310634",
                    "mean_anomaly": "103.4379257868357",
                    "mean_motion": "1.084654073022889",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "ATE",
                        "orbit_class_description": "Near-Earth asteroid orbits similar to that of 2062 Aten",
                        "orbit_class_range": "a (semi-major axis) < 1.0 AU; q (perihelion) > 0.983 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3802442?"
                },
                "id": "3802442",
                "neo_reference_id": "3802442",
                "name": "(2018 GE2)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3802442",
                "absolute_magnitude_h": 27.04,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.010388551,
                        "estimated_diameter_max": 0.0232295062
                    },
                    "meters": {
                        "estimated_diameter_min": 10.3885510102,
                        "estimated_diameter_max": 23.2295062464
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0064551443,
                        "estimated_diameter_max": 0.0144341415
                    },
                    "feet": {
                        "estimated_diameter_min": 34.0831736962,
                        "estimated_diameter_max": 76.2122932736
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-10",
                        "close_approach_date_full": "2025-Nov-10 13:21",
                        "epoch_date_close_approach": 1762780860000,
                        "relative_velocity": {
                            "kilometers_per_second": "4.1959625318",
                            "kilometers_per_hour": "15105.4651145268",
                            "miles_per_hour": "9385.9485874125"
                        },
                        "miss_distance": {
                            "astronomical": "0.0686048969",
                            "lunar": "26.6873048941",
                            "kilometers": "10263146.447809603",
                            "miles": "6377223.4868864014"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "21",
                    "orbit_determination_date": "2023-03-30 08:33:50",
                    "first_observation_date": "2018-04-10",
                    "last_observation_date": "2018-05-16",
                    "data_arc_in_days": 36,
                    "observations_used": 110,
                    "orbit_uncertainty": "5",
                    "minimum_orbit_intersection": ".00074935",
                    "jupiter_tisserand_invariant": "5.677",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".2266178984440942",
                    "semi_major_axis": "1.08711147391634",
                    "inclination": ".4747985329666698",
                    "ascending_node_longitude": "42.36965157140467",
                    "orbital_period": "414.0087749847496",
                    "perihelion_distance": ".8407525563229575",
                    "perihelion_argument": "74.7431704974242",
                    "aphelion_distance": "1.333470391509723",
                    "perihelion_time": "2461046.872475156933",
                    "mean_anomaly": "319.6769632307654",
                    "mean_motion": ".8695467868120935",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": true,
                "sentry_data": "http://api.nasa.gov/neo/rest/v1/neo/sentry/3802442?"
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3836166?"
                },
                "id": "3836166",
                "neo_reference_id": "3836166",
                "name": "(2018 VL6)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3836166",
                "absolute_magnitude_h": 23.04,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0655473256,
                        "estimated_diameter_max": 0.1465682757
                    },
                    "meters": {
                        "estimated_diameter_min": 65.5473255837,
                        "estimated_diameter_max": 146.5682757484
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0407292072,
                        "estimated_diameter_max": 0.0910732761
                    },
                    "feet": {
                        "estimated_diameter_min": 215.050287668,
                        "estimated_diameter_max": 480.8670618065
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-10",
                        "close_approach_date_full": "2025-Nov-10 23:28",
                        "epoch_date_close_approach": 1762817280000,
                        "relative_velocity": {
                            "kilometers_per_second": "18.2949230198",
                            "kilometers_per_hour": "65861.7228713023",
                            "miles_per_hour": "40923.9133030045"
                        },
                        "miss_distance": {
                            "astronomical": "0.1650236691",
                            "lunar": "64.1942072799",
                            "kilometers": "24687189.396944817",
                            "miles": "15339908.1702677946"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "6",
                    "orbit_determination_date": "2025-10-30 06:27:14",
                    "first_observation_date": "2011-10-24",
                    "last_observation_date": "2025-10-29",
                    "data_arc_in_days": 5119,
                    "observations_used": 45,
                    "orbit_uncertainty": "0",
                    "minimum_orbit_intersection": ".083411",
                    "jupiter_tisserand_invariant": "3.768",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".6726274753411231",
                    "semi_major_axis": "1.760534880008024",
                    "inclination": "19.20646454437983",
                    "ascending_node_longitude": "29.26894012529508",
                    "orbital_period": "853.2285471910091",
                    "perihelion_distance": ".5763507484182397",
                    "perihelion_argument": "108.3996334632729",
                    "aphelion_distance": "2.944719011597809",
                    "perihelion_time": "2461042.737734831370",
                    "mean_anomaly": "342.1787672372743",
                    "mean_motion": ".421926811034615",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3873144?"
                },
                "id": "3873144",
                "neo_reference_id": "3873144",
                "name": "(2019 SY8)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3873144",
                "absolute_magnitude_h": 25.05,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0259749653,
                        "estimated_diameter_max": 0.0580817882
                    },
                    "meters": {
                        "estimated_diameter_min": 25.974965333,
                        "estimated_diameter_max": 58.0817881978
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0161400902,
                        "estimated_diameter_max": 0.0360903388
                    },
                    "feet": {
                        "estimated_diameter_min": 85.2197052631,
                        "estimated_diameter_max": 190.5570539909
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-10",
                        "close_approach_date_full": "2025-Nov-10 16:21",
                        "epoch_date_close_approach": 1762791660000,
                        "relative_velocity": {
                            "kilometers_per_second": "3.0338319722",
                            "kilometers_per_hour": "10921.795100005",
                            "miles_per_hour": "6786.378738667"
                        },
                        "miss_distance": {
                            "astronomical": "0.3874635392",
                            "lunar": "150.7233167488",
                            "kilometers": "57963720.166981504",
                            "miles": "36016985.5819485952"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "5",
                    "orbit_determination_date": "2024-03-29 11:13:59",
                    "first_observation_date": "2019-09-29",
                    "last_observation_date": "2019-10-23",
                    "data_arc_in_days": 24,
                    "observations_used": 19,
                    "orbit_uncertainty": "7",
                    "minimum_orbit_intersection": ".151439",
                    "jupiter_tisserand_invariant": "4.357",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".2688831814945724",
                    "semi_major_axis": "1.577226405995468",
                    "inclination": "3.925377253278582",
                    "ascending_node_longitude": "202.1468434483137",
                    "orbital_period": "723.5015835850074",
                    "perihelion_distance": "1.153136752014157",
                    "perihelion_argument": "151.2048909766219",
                    "aphelion_distance": "2.00131605997678",
                    "perihelion_time": "2460910.368832427002",
                    "mean_anomaly": "44.8474765811854",
                    "mean_motion": ".497580113392664",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "AMO",
                        "orbit_class_description": "Near-Earth asteroid orbits similar to that of 1221 Amor",
                        "orbit_class_range": "1.017 AU < q (perihelion) < 1.3 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3986725?"
                },
                "id": "3986725",
                "neo_reference_id": "3986725",
                "name": "(2020 BH)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3986725",
                "absolute_magnitude_h": 28.26,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0059231806,
                        "estimated_diameter_max": 0.0132446345
                    },
                    "meters": {
                        "estimated_diameter_min": 5.9231806268,
                        "estimated_diameter_max": 13.2446345244
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0036804927,
                        "estimated_diameter_max": 0.0082298318
                    },
                    "feet": {
                        "estimated_diameter_min": 19.4330079275,
                        "estimated_diameter_max": 43.4535267332
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-10",
                        "close_approach_date_full": "2025-Nov-10 11:50",
                        "epoch_date_close_approach": 1762775400000,
                        "relative_velocity": {
                            "kilometers_per_second": "12.7478181007",
                            "kilometers_per_hour": "45892.1451624538",
                            "miles_per_hour": "28515.5943094147"
                        },
                        "miss_distance": {
                            "astronomical": "0.3013797773",
                            "lunar": "117.2367333697",
                            "kilometers": "45085772.745154351",
                            "miles": "28015000.1110220038"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "12",
                    "orbit_determination_date": "2021-10-13 06:27:38",
                    "first_observation_date": "2020-01-12",
                    "last_observation_date": "2020-02-25",
                    "data_arc_in_days": 44,
                    "observations_used": 72,
                    "orbit_uncertainty": "5",
                    "minimum_orbit_intersection": ".00272321",
                    "jupiter_tisserand_invariant": "4.968",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".2422970904443164",
                    "semi_major_axis": "1.301467265917834",
                    "inclination": ".5982586068956175",
                    "ascending_node_longitude": "106.9395675285305",
                    "orbital_period": "542.3108593062611",
                    "perihelion_distance": ".9861255340774232",
                    "perihelion_argument": "354.3428709291443",
                    "aphelion_distance": "1.616808997758244",
                    "perihelion_time": "2461023.128265777453",
                    "mean_anomaly": "344.9787708652855",
                    "mean_motion": ".6638259105866363",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": true,
                "sentry_data": "http://api.nasa.gov/neo/rest/v1/neo/sentry/3986725?"
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3989253?"
                },
                "id": "3989253",
                "neo_reference_id": "3989253",
                "name": "(2020 BD11)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3989253",
                "absolute_magnitude_h": 24.29,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0368599699,
                        "estimated_diameter_max": 0.0824213984
                    },
                    "meters": {
                        "estimated_diameter_min": 36.8599699314,
                        "estimated_diameter_max": 82.4213984152
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0229037164,
                        "estimated_diameter_max": 0.0512142668
                    },
                    "feet": {
                        "estimated_diameter_min": 120.9316637498,
                        "estimated_diameter_max": 270.4114207767
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-10",
                        "close_approach_date_full": "2025-Nov-10 23:02",
                        "epoch_date_close_approach": 1762815720000,
                        "relative_velocity": {
                            "kilometers_per_second": "7.976227195",
                            "kilometers_per_hour": "28714.4179020015",
                            "miles_per_hour": "17842.0226124965"
                        },
                        "miss_distance": {
                            "astronomical": "0.300387175",
                            "lunar": "116.850611075",
                            "kilometers": "44937281.55531725",
                            "miles": "27922731.96418805"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "7",
                    "orbit_determination_date": "2022-12-21 04:50:39",
                    "first_observation_date": "2019-12-24",
                    "last_observation_date": "2022-12-21",
                    "data_arc_in_days": 1093,
                    "observations_used": 33,
                    "orbit_uncertainty": "2",
                    "minimum_orbit_intersection": ".0921143",
                    "jupiter_tisserand_invariant": "5.974",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".2784017817633032",
                    "semi_major_axis": "1.013984216421834",
                    "inclination": "6.461387789316394",
                    "ascending_node_longitude": "88.95802408232474",
                    "orbital_period": "372.9453693790974",
                    "perihelion_distance": ".7316892038901285",
                    "perihelion_argument": "158.1081740711253",
                    "aphelion_distance": "1.296279228953539",
                    "perihelion_time": "2460832.575830990982",
                    "mean_anomaly": "162.0953249637928",
                    "mean_motion": ".9652888319791993",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54016324?"
                },
                "id": "54016324",
                "neo_reference_id": "54016324",
                "name": "(2020 FN3)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54016324",
                "absolute_magnitude_h": 24.38,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0353634784,
                        "estimated_diameter_max": 0.0790751417
                    },
                    "meters": {
                        "estimated_diameter_min": 35.3634784299,
                        "estimated_diameter_max": 79.07514169
                    },
                    "miles": {
                        "estimated_diameter_min": 0.02197384,
                        "estimated_diameter_max": 0.0491349999
                    },
                    "feet": {
                        "estimated_diameter_min": 116.0219145718,
                        "estimated_diameter_max": 259.4328878623
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-10",
                        "close_approach_date_full": "2025-Nov-10 23:36",
                        "epoch_date_close_approach": 1762817760000,
                        "relative_velocity": {
                            "kilometers_per_second": "4.2315833352",
                            "kilometers_per_hour": "15233.7000068161",
                            "miles_per_hour": "9465.6287625686"
                        },
                        "miss_distance": {
                            "astronomical": "0.1450622311",
                            "lunar": "56.4292078979",
                            "kilometers": "21701000.790007757",
                            "miles": "13484376.6120587666"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "10",
                    "orbit_determination_date": "2022-01-25 05:23:48",
                    "first_observation_date": "2020-03-22",
                    "last_observation_date": "2022-01-25",
                    "data_arc_in_days": 674,
                    "observations_used": 50,
                    "orbit_uncertainty": "2",
                    "minimum_orbit_intersection": ".00198453",
                    "jupiter_tisserand_invariant": "6.001",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".2080587179171797",
                    "semi_major_axis": "1.012679086241812",
                    "inclination": ".8957898770936888",
                    "ascending_node_longitude": "20.63725563998301",
                    "orbital_period": "372.2255569939166",
                    "perihelion_distance": ".8019823738967997",
                    "perihelion_argument": "269.7861273024216",
                    "aphelion_distance": "1.223375798586825",
                    "perihelion_time": "2460885.070787234124",
                    "mean_anomaly": "111.6379996347071",
                    "mean_motion": ".9671555142729859",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54087786?"
                },
                "id": "54087786",
                "neo_reference_id": "54087786",
                "name": "(2020 VK4)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54087786",
                "absolute_magnitude_h": 28.1,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0063760979,
                        "estimated_diameter_max": 0.0142573883
                    },
                    "meters": {
                        "estimated_diameter_min": 6.3760978988,
                        "estimated_diameter_max": 14.2573883328
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0039619223,
                        "estimated_diameter_max": 0.0088591276
                    },
                    "feet": {
                        "estimated_diameter_min": 20.9189570301,
                        "estimated_diameter_max": 46.7762099378
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-10",
                        "close_approach_date_full": "2025-Nov-10 23:40",
                        "epoch_date_close_approach": 1762818000000,
                        "relative_velocity": {
                            "kilometers_per_second": "3.8287638425",
                            "kilometers_per_hour": "13783.5498331637",
                            "miles_per_hour": "8564.56183939"
                        },
                        "miss_distance": {
                            "astronomical": "0.0419707334",
                            "lunar": "16.3266152926",
                            "kilometers": "6278732.318977858",
                            "miles": "3901423.3516081204"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "9",
                    "orbit_determination_date": "2021-04-15 23:17:01",
                    "first_observation_date": "2020-11-13",
                    "last_observation_date": "2020-11-22",
                    "data_arc_in_days": 9,
                    "observations_used": 64,
                    "orbit_uncertainty": "6",
                    "minimum_orbit_intersection": ".0131846",
                    "jupiter_tisserand_invariant": "5.426",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".1397113213193126",
                    "semi_major_axis": "1.157409170013747",
                    "inclination": "4.986424564811577",
                    "ascending_node_longitude": "234.4046387599977",
                    "orbital_period": "454.8087435094103",
                    "perihelion_distance": ".9957060055640372",
                    "perihelion_argument": "199.3841077873571",
                    "aphelion_distance": "1.319112334463456",
                    "perihelion_time": "2461012.453012791103",
                    "mean_anomaly": "350.5386941957327",
                    "mean_motion": ".7915415108824779",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54144286?"
                },
                "id": "54144286",
                "neo_reference_id": "54144286",
                "name": "(2021 JG3)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54144286",
                "absolute_magnitude_h": 22.37,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0892390579,
                        "estimated_diameter_max": 0.1995445996
                    },
                    "meters": {
                        "estimated_diameter_min": 89.2390578658,
                        "estimated_diameter_max": 199.5445996359
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0554505626,
                        "estimated_diameter_max": 0.1239912274
                    },
                    "feet": {
                        "estimated_diameter_min": 292.7790706084,
                        "estimated_diameter_max": 654.6739042695
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-10",
                        "close_approach_date_full": "2025-Nov-10 19:31",
                        "epoch_date_close_approach": 1762803060000,
                        "relative_velocity": {
                            "kilometers_per_second": "9.1927370222",
                            "kilometers_per_hour": "33093.853280003",
                            "miles_per_hour": "20563.2334450107"
                        },
                        "miss_distance": {
                            "astronomical": "0.1565065449",
                            "lunar": "60.8810459661",
                            "kilometers": "23413045.758099363",
                            "miles": "14548192.0254546894"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "10",
                    "orbit_determination_date": "2025-11-12 06:09:49",
                    "first_observation_date": "2021-05-08",
                    "last_observation_date": "2025-11-11",
                    "data_arc_in_days": 1648,
                    "observations_used": 79,
                    "orbit_uncertainty": "1",
                    "minimum_orbit_intersection": ".0498673",
                    "jupiter_tisserand_invariant": "5.396",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".1836941840232371",
                    "semi_major_axis": "1.154083614464033",
                    "inclination": "16.59642926011142",
                    "ascending_node_longitude": "36.10306667143043",
                    "orbital_period": "452.8499659120722",
                    "perihelion_distance": ".9420851666104746",
                    "perihelion_argument": "104.9379659530491",
                    "aphelion_distance": "1.366082062317592",
                    "perihelion_time": "2461082.589357150405",
                    "mean_anomaly": "294.7418111987142",
                    "mean_motion": ".7949652801119997",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54276978?"
                },
                "id": "54276978",
                "neo_reference_id": "54276978",
                "name": "(2022 HJ3)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54276978",
                "absolute_magnitude_h": 27.82,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0072536229,
                        "estimated_diameter_max": 0.016219594
                    },
                    "meters": {
                        "estimated_diameter_min": 7.2536229467,
                        "estimated_diameter_max": 16.219593992
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0045071909,
                        "estimated_diameter_max": 0.0100783853
                    },
                    "feet": {
                        "estimated_diameter_min": 23.7979763085,
                        "estimated_diameter_max": 53.2138927527
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-10",
                        "close_approach_date_full": "2025-Nov-10 11:09",
                        "epoch_date_close_approach": 1762772940000,
                        "relative_velocity": {
                            "kilometers_per_second": "7.1159508058",
                            "kilometers_per_hour": "25617.4229008752",
                            "miles_per_hour": "15917.670357491"
                        },
                        "miss_distance": {
                            "astronomical": "0.4269776294",
                            "lunar": "166.0942978366",
                            "kilometers": "63874943.895889378",
                            "miles": "39690049.6848462964"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "3",
                    "orbit_determination_date": "2022-05-03 05:54:49",
                    "first_observation_date": "2022-04-27",
                    "last_observation_date": "2022-05-03",
                    "data_arc_in_days": 6,
                    "observations_used": 31,
                    "orbit_uncertainty": "7",
                    "minimum_orbit_intersection": ".00858035",
                    "jupiter_tisserand_invariant": "5.169",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".1820793221603579",
                    "semi_major_axis": "1.235542311771827",
                    "inclination": "2.749432892321711",
                    "ascending_node_longitude": "202.880082116633",
                    "orbital_period": "501.6315699583913",
                    "perihelion_distance": "1.010575605143971",
                    "perihelion_argument": "350.5167973896798",
                    "aphelion_distance": "1.460509018399683",
                    "perihelion_time": "2461179.036060703177",
                    "mean_anomaly": "231.8721354430008",
                    "mean_motion": ".7176581809431588",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54497055?"
                },
                "id": "54497055",
                "neo_reference_id": "54497055",
                "name": "(2024 VD)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54497055",
                "absolute_magnitude_h": 26.44,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0136947774,
                        "estimated_diameter_max": 0.0306224531
                    },
                    "meters": {
                        "estimated_diameter_min": 13.694777373,
                        "estimated_diameter_max": 30.6224531427
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0085095375,
                        "estimated_diameter_max": 0.0190279043
                    },
                    "feet": {
                        "estimated_diameter_min": 44.9303733964,
                        "estimated_diameter_max": 100.4673691687
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-10",
                        "close_approach_date_full": "2025-Nov-10 04:38",
                        "epoch_date_close_approach": 1762749480000,
                        "relative_velocity": {
                            "kilometers_per_second": "20.860884539",
                            "kilometers_per_hour": "75099.1843403327",
                            "miles_per_hour": "46663.7126252473"
                        },
                        "miss_distance": {
                            "astronomical": "0.3311275462",
                            "lunar": "128.8086154718",
                            "kilometers": "49535975.609846594",
                            "miles": "30780227.9458232372"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "4",
                    "orbit_determination_date": "2024-11-05 05:19:53",
                    "first_observation_date": "2024-11-01",
                    "last_observation_date": "2024-11-05",
                    "data_arc_in_days": 4,
                    "observations_used": 42,
                    "orbit_uncertainty": "7",
                    "minimum_orbit_intersection": ".0106723",
                    "jupiter_tisserand_invariant": "5.861",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".3374690180209927",
                    "semi_major_axis": "1.036370523768234",
                    "inclination": ".6386255771074355",
                    "ascending_node_longitude": "109.2653721911015",
                    "orbital_period": "385.3638795168992",
                    "perihelion_distance": ".6866275808062661",
                    "perihelion_argument": "181.8054602548502",
                    "aphelion_distance": "1.386113466730202",
                    "perihelion_time": "2460927.293154245326",
                    "mean_anomaly": "68.38851763876012",
                    "mean_motion": ".9341820007918337",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54533420?"
                },
                "id": "54533420",
                "neo_reference_id": "54533420",
                "name": "(2025 KD4)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54533420",
                "absolute_magnitude_h": 24.67,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0309424699,
                        "estimated_diameter_max": 0.069189466
                    },
                    "meters": {
                        "estimated_diameter_min": 30.9424698617,
                        "estimated_diameter_max": 69.1894660026
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0192267534,
                        "estimated_diameter_max": 0.0429923277
                    },
                    "feet": {
                        "estimated_diameter_min": 101.5172928212,
                        "estimated_diameter_max": 226.9995676399
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-10",
                        "close_approach_date_full": "2025-Nov-10 07:16",
                        "epoch_date_close_approach": 1762758960000,
                        "relative_velocity": {
                            "kilometers_per_second": "6.7790927048",
                            "kilometers_per_hour": "24404.7337373384",
                            "miles_per_hour": "15164.1524714034"
                        },
                        "miss_distance": {
                            "astronomical": "0.1854979968",
                            "lunar": "72.1587207552",
                            "kilometers": "27750105.210546816",
                            "miles": "17243115.8039294208"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "3",
                    "orbit_determination_date": "2025-06-07 06:21:02",
                    "first_observation_date": "2025-05-25",
                    "last_observation_date": "2025-06-07",
                    "data_arc_in_days": 13,
                    "observations_used": 23,
                    "orbit_uncertainty": "6",
                    "minimum_orbit_intersection": ".0444751",
                    "jupiter_tisserand_invariant": "6.269",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".1750515189243125",
                    "semi_major_axis": ".9581320813884775",
                    "inclination": "6.974792880264128",
                    "ascending_node_longitude": "219.5380934997204",
                    "orbital_period": "342.5598816281227",
                    "perihelion_distance": ".7904096052113115",
                    "perihelion_argument": "218.8602796008444",
                    "aphelion_distance": "1.125854557565644",
                    "perihelion_time": "2461012.114594114682",
                    "mean_anomaly": "347.7940935131905",
                    "mean_motion": "1.050911152493946",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "ATE",
                        "orbit_class_description": "Near-Earth asteroid orbits similar to that of 2062 Aten",
                        "orbit_class_range": "a (semi-major axis) < 1.0 AU; q (perihelion) > 0.983 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54560904?"
                },
                "id": "54560904",
                "neo_reference_id": "54560904",
                "name": "(2025 VR)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54560904",
                "absolute_magnitude_h": 26.872,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0112241891,
                        "estimated_diameter_max": 0.0250980499
                    },
                    "meters": {
                        "estimated_diameter_min": 11.2241891447,
                        "estimated_diameter_max": 25.0980499199
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0069743856,
                        "estimated_diameter_max": 0.0155952004
                    },
                    "feet": {
                        "estimated_diameter_min": 36.8247687135,
                        "estimated_diameter_max": 82.3426860992
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-10",
                        "close_approach_date_full": "2025-Nov-10 09:35",
                        "epoch_date_close_approach": 1762767300000,
                        "relative_velocity": {
                            "kilometers_per_second": "10.7815260762",
                            "kilometers_per_hour": "38813.4938744464",
                            "miles_per_hour": "24117.1956799303"
                        },
                        "miss_distance": {
                            "astronomical": "0.0070641417",
                            "lunar": "2.7479511213",
                            "kilometers": "1056780.551698179",
                            "miles": "656652.9854217102"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "1",
                    "orbit_determination_date": "2025-11-08 18:42:02",
                    "first_observation_date": "2025-11-07",
                    "last_observation_date": "2025-11-09",
                    "data_arc_in_days": 2,
                    "observations_used": 26,
                    "orbit_uncertainty": "7",
                    "minimum_orbit_intersection": ".00461046",
                    "jupiter_tisserand_invariant": "3.134",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".6323763069029722",
                    "semi_major_axis": "2.53257391789456",
                    "inclination": "3.156086806122532",
                    "ascending_node_longitude": "53.78217004528295",
                    "orbital_period": "1472.114606141953",
                    "perihelion_distance": ".9310341767376071",
                    "perihelion_argument": "27.15912644032817",
                    "aphelion_distance": "4.134113659051513",
                    "perihelion_time": "2461014.351694494500",
                    "mean_anomaly": "356.6126210573451",
                    "mean_motion": ".2445461776535664",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54561039?"
                },
                "id": "54561039",
                "neo_reference_id": "54561039",
                "name": "(2025 VT)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54561039",
                "absolute_magnitude_h": 25.671,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0195143898,
                        "estimated_diameter_max": 0.0436355022
                    },
                    "meters": {
                        "estimated_diameter_min": 19.5143898374,
                        "estimated_diameter_max": 43.6355022159
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0121256759,
                        "estimated_diameter_max": 0.0271138356
                    },
                    "feet": {
                        "estimated_diameter_min": 64.0235907542,
                        "estimated_diameter_max": 143.1611010899
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-10",
                        "close_approach_date_full": "2025-Nov-10 09:51",
                        "epoch_date_close_approach": 1762768260000,
                        "relative_velocity": {
                            "kilometers_per_second": "5.1456763097",
                            "kilometers_per_hour": "18524.4347147616",
                            "miles_per_hour": "11510.3633370695"
                        },
                        "miss_distance": {
                            "astronomical": "0.0232841639",
                            "lunar": "9.0575397571",
                            "kilometers": "3483261.324170893",
                            "miles": "2164398.2223606034"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "6",
                    "orbit_determination_date": "2025-11-14 05:39:13",
                    "first_observation_date": "2025-11-03",
                    "last_observation_date": "2025-11-13",
                    "data_arc_in_days": 10,
                    "observations_used": 61,
                    "orbit_uncertainty": "6",
                    "minimum_orbit_intersection": ".0163949",
                    "jupiter_tisserand_invariant": "7.011",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".2175899953623545",
                    "semi_major_axis": ".8347469477270167",
                    "inclination": "6.369297009388598",
                    "ascending_node_longitude": "227.5151750133779",
                    "orbital_period": "278.5676538220426",
                    "perihelion_distance": ".6531143632423556",
                    "perihelion_argument": "11.44792826415215",
                    "aphelion_distance": "1.016379532211678",
                    "perihelion_time": "2460862.968773187490",
                    "mean_anomaly": "177.7350707204964",
                    "mean_motion": "1.292325203808403",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "ATE",
                        "orbit_class_description": "Near-Earth asteroid orbits similar to that of 2062 Aten",
                        "orbit_class_range": "a (semi-major axis) < 1.0 AU; q (perihelion) > 0.983 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54561362?"
                },
                "id": "54561362",
                "neo_reference_id": "54561362",
                "name": "(2025 VK1)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54561362",
                "absolute_magnitude_h": 27.098,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0101147459,
                        "estimated_diameter_max": 0.0226172594
                    },
                    "meters": {
                        "estimated_diameter_min": 10.1147458906,
                        "estimated_diameter_max": 22.6172593865
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0062850098,
                        "estimated_diameter_max": 0.0140537091
                    },
                    "feet": {
                        "estimated_diameter_min": 33.1848629076,
                        "estimated_diameter_max": 74.2036092855
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-10",
                        "close_approach_date_full": "2025-Nov-10 15:26",
                        "epoch_date_close_approach": 1762788360000,
                        "relative_velocity": {
                            "kilometers_per_second": "15.1857882117",
                            "kilometers_per_hour": "54668.8375619792",
                            "miles_per_hour": "33969.0896506643"
                        },
                        "miss_distance": {
                            "astronomical": "0.0246206418",
                            "lunar": "9.5774296602",
                            "kilometers": "3683195.571312966",
                            "miles": "2288631.6027562908"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "2",
                    "orbit_determination_date": "2025-11-12 06:10:03",
                    "first_observation_date": "2025-11-10",
                    "last_observation_date": "2025-11-12",
                    "data_arc_in_days": 2,
                    "observations_used": 30,
                    "orbit_uncertainty": "8",
                    "minimum_orbit_intersection": ".0245542",
                    "jupiter_tisserand_invariant": "4.884",
                    "epoch_osculation": "2460989.5",
                    "eccentricity": ".2161006427023275",
                    "semi_major_axis": "1.293835446016986",
                    "inclination": "27.67141512889192",
                    "ascending_node_longitude": "48.06041543235108",
                    "orbital_period": "537.5476830213091",
                    "perihelion_distance": "1.014236774581663",
                    "perihelion_argument": "4.518759376032748",
                    "aphelion_distance": "1.57343411745231",
                    "perihelion_time": "2460994.407016749740",
                    "mean_anomaly": "356.7137314777778",
                    "mean_motion": ".6697080303213382",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54561376?"
                },
                "id": "54561376",
                "neo_reference_id": "54561376",
                "name": "(2025 VY1)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54561376",
                "absolute_magnitude_h": 25.578,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0203683091,
                        "estimated_diameter_max": 0.0455449237
                    },
                    "meters": {
                        "estimated_diameter_min": 20.368309081,
                        "estimated_diameter_max": 45.5449236919
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0126562766,
                        "estimated_diameter_max": 0.0283002948
                    },
                    "feet": {
                        "estimated_diameter_min": 66.8251631654,
                        "estimated_diameter_max": 149.4256074454
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-10",
                        "close_approach_date_full": "2025-Nov-10 06:07",
                        "epoch_date_close_approach": 1762754820000,
                        "relative_velocity": {
                            "kilometers_per_second": "21.6047142546",
                            "kilometers_per_hour": "77776.9713165017",
                            "miles_per_hour": "48327.5853160785"
                        },
                        "miss_distance": {
                            "astronomical": "0.0233002556",
                            "lunar": "9.0637994284",
                            "kilometers": "3485668.608215572",
                            "miles": "2165894.0393040136"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "3",
                    "orbit_determination_date": "2025-11-13 05:20:59",
                    "first_observation_date": "2025-11-11",
                    "last_observation_date": "2025-11-12",
                    "data_arc_in_days": 1,
                    "observations_used": 54,
                    "orbit_uncertainty": "8",
                    "minimum_orbit_intersection": ".022885",
                    "jupiter_tisserand_invariant": "3.777",
                    "epoch_osculation": "2460990.5",
                    "eccentricity": ".4932241323081011",
                    "semi_major_axis": "1.773258217010704",
                    "inclination": "33.95572245899731",
                    "ascending_node_longitude": "48.44940224303143",
                    "orbital_period": "862.4946271395677",
                    "perihelion_distance": ".8986444715673892",
                    "perihelion_argument": "310.5518529879365",
                    "aphelion_distance": "2.647871962454019",
                    "perihelion_time": "2460952.712058649727",
                    "mean_anomaly": "15.77245638180301",
                    "mean_motion": ".4173939044628336",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54561652?"
                },
                "id": "54561652",
                "neo_reference_id": "54561652",
                "name": "(2025 VY3)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54561652",
                "absolute_magnitude_h": 26.821,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0114909246,
                        "estimated_diameter_max": 0.0256944886
                    },
                    "meters": {
                        "estimated_diameter_min": 11.4909246439,
                        "estimated_diameter_max": 25.6944886281
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0071401273,
                        "estimated_diameter_max": 0.0159658101
                    },
                    "feet": {
                        "estimated_diameter_min": 37.6998852087,
                        "estimated_diameter_max": 84.2995060705
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-10",
                        "close_approach_date_full": "2025-Nov-10 04:14",
                        "epoch_date_close_approach": 1762748040000,
                        "relative_velocity": {
                            "kilometers_per_second": "9.3919327946",
                            "kilometers_per_hour": "33810.9580604866",
                            "miles_per_hour": "21008.8144681952"
                        },
                        "miss_distance": {
                            "astronomical": "0.0139076011",
                            "lunar": "5.4100568279",
                            "kilometers": "2080547.501369657",
                            "miles": "1292792.2697769866"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "1",
                    "orbit_determination_date": "2025-11-14 14:42:04",
                    "first_observation_date": "2025-11-14",
                    "last_observation_date": "2025-11-14",
                    "data_arc_in_days": null,
                    "observations_used": 22,
                    "orbit_uncertainty": "7",
                    "minimum_orbit_intersection": ".0117748",
                    "jupiter_tisserand_invariant": "5.759",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".2660437210074685",
                    "semi_major_axis": "1.063208003680646",
                    "inclination": "7.195519361701363",
                    "ascending_node_longitude": "52.32617334609233",
                    "orbital_period": "400.4292399009766",
                    "perihelion_distance": ".7803481901765246",
                    "perihelion_argument": "263.4364179145732",
                    "aphelion_distance": "1.346067817184767",
                    "perihelion_time": "2460921.634818777178",
                    "mean_anomaly": "70.90257756211066",
                    "mean_motion": ".8990352455006171",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            }
        ],
        "2025-11-13": [
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3359094?"
                },
                "id": "3359094",
                "neo_reference_id": "3359094",
                "name": "(2006 WV)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3359094",
                "absolute_magnitude_h": 27.2,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0096506147,
                        "estimated_diameter_max": 0.0215794305
                    },
                    "meters": {
                        "estimated_diameter_min": 9.6506146958,
                        "estimated_diameter_max": 21.5794304844
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0059966121,
                        "estimated_diameter_max": 0.0134088323
                    },
                    "feet": {
                        "estimated_diameter_min": 31.6621227185,
                        "estimated_diameter_max": 70.7986587106
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-13",
                        "close_approach_date_full": "2025-Nov-13 09:22",
                        "epoch_date_close_approach": 1763025720000,
                        "relative_velocity": {
                            "kilometers_per_second": "18.629036066",
                            "kilometers_per_hour": "67064.5298376202",
                            "miles_per_hour": "41671.2907760479"
                        },
                        "miss_distance": {
                            "astronomical": "0.1325387416",
                            "lunar": "51.5575704824",
                            "kilometers": "19827513.435840392",
                            "miles": "12320245.5516537296"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "12",
                    "orbit_determination_date": "2021-04-15 00:15:42",
                    "first_observation_date": "2006-11-17",
                    "last_observation_date": "2006-11-21",
                    "data_arc_in_days": 4,
                    "observations_used": 83,
                    "orbit_uncertainty": "7",
                    "minimum_orbit_intersection": ".00184584",
                    "jupiter_tisserand_invariant": "4.314",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".5335743501467212",
                    "semi_major_axis": "1.531572520939383",
                    "inclination": "2.151858851664476",
                    "ascending_node_longitude": "56.25555234272562",
                    "orbital_period": "692.3166485870299",
                    "perihelion_distance": ".7143647083765761",
                    "perihelion_argument": "81.00309932873074",
                    "aphelion_distance": "2.348780333502189",
                    "perihelion_time": "2461042.327735158365",
                    "mean_anomaly": "338.2498590959157",
                    "mean_motion": ".5199932729261024",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": true,
                "sentry_data": "http://api.nasa.gov/neo/rest/v1/neo/sentry/3359094?"
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3767009?"
                },
                "id": "3767009",
                "neo_reference_id": "3767009",
                "name": "(2017 BS6)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3767009",
                "absolute_magnitude_h": 23.1,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.063760979,
                        "estimated_diameter_max": 0.1425738833
                    },
                    "meters": {
                        "estimated_diameter_min": 63.7609789875,
                        "estimated_diameter_max": 142.5738833281
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0396192233,
                        "estimated_diameter_max": 0.0885912765
                    },
                    "feet": {
                        "estimated_diameter_min": 209.1895703015,
                        "estimated_diameter_max": 467.7620993781
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-13",
                        "close_approach_date_full": "2025-Nov-13 00:43",
                        "epoch_date_close_approach": 1762994580000,
                        "relative_velocity": {
                            "kilometers_per_second": "7.7929454148",
                            "kilometers_per_hour": "28054.6034934286",
                            "miles_per_hour": "17432.0395984585"
                        },
                        "miss_distance": {
                            "astronomical": "0.4972211011",
                            "lunar": "193.4190083279",
                            "kilometers": "74383217.643614657",
                            "miles": "46219588.2129579866"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "13",
                    "orbit_determination_date": "2021-04-15 18:24:59",
                    "first_observation_date": "2017-01-26",
                    "last_observation_date": "2017-07-27",
                    "data_arc_in_days": 182,
                    "observations_used": 52,
                    "orbit_uncertainty": "4",
                    "minimum_orbit_intersection": ".0523673",
                    "jupiter_tisserand_invariant": "5.267",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".179481201042388",
                    "semi_major_axis": "1.195876520861419",
                    "inclination": "13.79043040448152",
                    "ascending_node_longitude": "298.7728970999173",
                    "orbital_period": "477.6699664186937",
                    "perihelion_distance": ".9812391665988195",
                    "perihelion_argument": "293.5112920805446",
                    "aphelion_distance": "1.41051387512402",
                    "perihelion_time": "2461236.701746640501",
                    "mean_anomaly": "181.9845609551126",
                    "mean_motion": ".7536584363866996",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54017226?"
                },
                "id": "54017226",
                "neo_reference_id": "54017226",
                "name": "(2020 JR3)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54017226",
                "absolute_magnitude_h": 24.0,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0421264611,
                        "estimated_diameter_max": 0.0941976306
                    },
                    "meters": {
                        "estimated_diameter_min": 42.1264610556,
                        "estimated_diameter_max": 94.1976305719
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0261761612,
                        "estimated_diameter_max": 0.0585316759
                    },
                    "feet": {
                        "estimated_diameter_min": 138.2101784897,
                        "estimated_diameter_max": 309.0473542854
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-13",
                        "close_approach_date_full": "2025-Nov-13 13:17",
                        "epoch_date_close_approach": 1763039820000,
                        "relative_velocity": {
                            "kilometers_per_second": "17.685041164",
                            "kilometers_per_hour": "63666.1481905559",
                            "miles_per_hour": "39559.6685798485"
                        },
                        "miss_distance": {
                            "astronomical": "0.4385081461",
                            "lunar": "170.5796688329",
                            "kilometers": "65599884.634208807",
                            "miles": "40761878.1582912566"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "11",
                    "orbit_determination_date": "2021-04-15 22:32:09",
                    "first_observation_date": "2020-05-14",
                    "last_observation_date": "2020-11-15",
                    "data_arc_in_days": 185,
                    "observations_used": 48,
                    "orbit_uncertainty": "5",
                    "minimum_orbit_intersection": ".0383004",
                    "jupiter_tisserand_invariant": "5.359",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".1862957706473081",
                    "semi_major_axis": "1.175022609595417",
                    "inclination": "4.476016788031227",
                    "ascending_node_longitude": "253.2897233510689",
                    "orbital_period": "465.2300532760911",
                    "perihelion_distance": ".9561208670128281",
                    "perihelion_argument": "84.49556603806293",
                    "aphelion_distance": "1.393924352178006",
                    "perihelion_time": "2460949.639519191128",
                    "mean_anomaly": "39.35638500191204",
                    "mean_motion": ".7738107146452075",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54415885?"
                },
                "id": "54415885",
                "neo_reference_id": "54415885",
                "name": "(2023 XH10)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54415885",
                "absolute_magnitude_h": 21.95,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.1082816778,
                        "estimated_diameter_max": 0.2421251924
                    },
                    "meters": {
                        "estimated_diameter_min": 108.2816778403,
                        "estimated_diameter_max": 242.1251923687
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0672830944,
                        "estimated_diameter_max": 0.1504495729
                    },
                    "feet": {
                        "estimated_diameter_min": 355.2548599257,
                        "estimated_diameter_max": 794.374016131
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-13",
                        "close_approach_date_full": "2025-Nov-13 16:17",
                        "epoch_date_close_approach": 1763050620000,
                        "relative_velocity": {
                            "kilometers_per_second": "13.8675521464",
                            "kilometers_per_hour": "49923.1877270551",
                            "miles_per_hour": "31020.3273962916"
                        },
                        "miss_distance": {
                            "astronomical": "0.1274345033",
                            "lunar": "49.5720217837",
                            "kilometers": "19063930.258187971",
                            "miles": "11845776.9664611598"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "5",
                    "orbit_determination_date": "2024-01-01 05:29:55",
                    "first_observation_date": "2023-12-09",
                    "last_observation_date": "2023-12-31",
                    "data_arc_in_days": 22,
                    "observations_used": 35,
                    "orbit_uncertainty": "8",
                    "minimum_orbit_intersection": ".0664359",
                    "jupiter_tisserand_invariant": "4.215",
                    "epoch_osculation": "2460294.5",
                    "eccentricity": ".5768119614079004",
                    "semi_major_axis": "1.566575830904839",
                    "inclination": "4.258799342197398",
                    "ascending_node_longitude": "174.9487227719137",
                    "orbital_period": "716.1855591321123",
                    "perihelion_distance": ".6629561531864077",
                    "perihelion_argument": "161.2179116771686",
                    "aphelion_distance": "2.470195508623271",
                    "perihelion_time": "2460230.469502120077",
                    "mean_anomaly": "32.18576379102911",
                    "mean_motion": ".5026630255380394",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54554706?"
                },
                "id": "54554706",
                "neo_reference_id": "54554706",
                "name": "(2025 US6)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54554706",
                "absolute_magnitude_h": 31.008,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0016709174,
                        "estimated_diameter_max": 0.0037362848
                    },
                    "meters": {
                        "estimated_diameter_min": 1.670917381,
                        "estimated_diameter_max": 3.7362848487
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0010382596,
                        "estimated_diameter_max": 0.0023216191
                    },
                    "feet": {
                        "estimated_diameter_min": 5.4820125803,
                        "estimated_diameter_max": 12.258152783
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-13",
                        "close_approach_date_full": "2025-Nov-13 07:01",
                        "epoch_date_close_approach": 1763017260000,
                        "relative_velocity": {
                            "kilometers_per_second": "2.0778105908",
                            "kilometers_per_hour": "7480.1181269372",
                            "miles_per_hour": "4647.8545105961"
                        },
                        "miss_distance": {
                            "astronomical": "0.0009131849",
                            "lunar": "0.3552289261",
                            "kilometers": "136610.515956163",
                            "miles": "84885.8384065294"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "1",
                    "orbit_determination_date": "2025-10-26 08:12:02",
                    "first_observation_date": "2025-10-26",
                    "last_observation_date": "2025-10-26",
                    "data_arc_in_days": null,
                    "observations_used": 26,
                    "orbit_uncertainty": "6",
                    "minimum_orbit_intersection": ".00212765",
                    "jupiter_tisserand_invariant": "6.275",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".02650068285257917",
                    "semi_major_axis": ".9606960442151415",
                    "inclination": ".02874435066552565",
                    "ascending_node_longitude": "91.86821790486698",
                    "orbital_period": "343.9358372211661",
                    "perihelion_distance": ".9352369430296688",
                    "perihelion_argument": "133.9200680093011",
                    "aphelion_distance": ".9861551454006143",
                    "perihelion_time": "2461159.653977291358",
                    "mean_anomaly": "193.4124402743026",
                    "mean_motion": "1.046706859362562",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "ATE",
                        "orbit_class_description": "Near-Earth asteroid orbits similar to that of 2062 Aten",
                        "orbit_class_range": "a (semi-major axis) < 1.0 AU; q (perihelion) > 0.983 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54561369?"
                },
                "id": "54561369",
                "neo_reference_id": "54561369",
                "name": "(2025 VR1)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54561369",
                "absolute_magnitude_h": 27.552,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0082064434,
                        "estimated_diameter_max": 0.0183501652
                    },
                    "meters": {
                        "estimated_diameter_min": 8.2064433641,
                        "estimated_diameter_max": 18.3501652157
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0050992459,
                        "estimated_diameter_max": 0.0114022605
                    },
                    "feet": {
                        "estimated_diameter_min": 26.9240276467,
                        "estimated_diameter_max": 60.2039560461
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-13",
                        "close_approach_date_full": "2025-Nov-13 23:04",
                        "epoch_date_close_approach": 1763075040000,
                        "relative_velocity": {
                            "kilometers_per_second": "8.0622373582",
                            "kilometers_per_hour": "29024.0544894022",
                            "miles_per_hour": "18034.4187464844"
                        },
                        "miss_distance": {
                            "astronomical": "0.0078649298",
                            "lunar": "3.0594576922",
                            "kilometers": "1176576.745779526",
                            "miles": "731090.8886924188"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "3",
                    "orbit_determination_date": "2025-11-13 08:52:28",
                    "first_observation_date": "2025-11-10",
                    "last_observation_date": "2025-11-12",
                    "data_arc_in_days": 2,
                    "observations_used": 23,
                    "orbit_uncertainty": "6",
                    "minimum_orbit_intersection": ".00577559",
                    "jupiter_tisserand_invariant": "6.095",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".2637565556437429",
                    "semi_major_axis": ".9901881073469573",
                    "inclination": "3.902874339694151",
                    "ascending_node_longitude": "226.7953539404214",
                    "orbital_period": "359.8943144296261",
                    "perihelion_distance": ".7290195027137271",
                    "perihelion_argument": "290.2509373968408",
                    "aphelion_distance": "1.251356711980187",
                    "perihelion_time": "2461068.292343611396",
                    "mean_anomaly": "292.1877486762166",
                    "mean_motion": "1.000293657238074",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "ATE",
                        "orbit_class_description": "Near-Earth asteroid orbits similar to that of 2062 Aten",
                        "orbit_class_range": "a (semi-major axis) < 1.0 AU; q (perihelion) > 0.983 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54561373?"
                },
                "id": "54561373",
                "neo_reference_id": "54561373",
                "name": "(2025 VV1)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54561373",
                "absolute_magnitude_h": 25.352,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0226024219,
                        "estimated_diameter_max": 0.0505405517
                    },
                    "meters": {
                        "estimated_diameter_min": 22.6024218658,
                        "estimated_diameter_max": 50.540551748
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0140444895,
                        "estimated_diameter_max": 0.0314044332
                    },
                    "feet": {
                        "estimated_diameter_min": 74.154929754,
                        "estimated_diameter_max": 165.8154637968
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-13",
                        "close_approach_date_full": "2025-Nov-13 16:04",
                        "epoch_date_close_approach": 1763049840000,
                        "relative_velocity": {
                            "kilometers_per_second": "11.264154774",
                            "kilometers_per_hour": "40550.9571863665",
                            "miles_per_hour": "25196.7878139398"
                        },
                        "miss_distance": {
                            "astronomical": "0.0158958239",
                            "lunar": "6.1834754971",
                            "kilometers": "2377981.397335093",
                            "miles": "1477609.1226585634"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "4",
                    "orbit_determination_date": "2025-11-14 05:39:13",
                    "first_observation_date": "2025-11-10",
                    "last_observation_date": "2025-11-14",
                    "data_arc_in_days": 4,
                    "observations_used": 52,
                    "orbit_uncertainty": "7",
                    "minimum_orbit_intersection": ".0158152",
                    "jupiter_tisserand_invariant": "3.207",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".5875912187620025",
                    "semi_major_axis": "2.437301049414263",
                    "inclination": "14.62229395554854",
                    "ascending_node_longitude": "231.3926370700173",
                    "orbital_period": "1389.83162646973",
                    "perihelion_distance": "1.005164355299029",
                    "perihelion_argument": "181.8164450768159",
                    "aphelion_distance": "3.869437743529498",
                    "perihelion_time": "2460994.759692481677",
                    "mean_anomaly": "1.486878458684555",
                    "mean_motion": ".2590241818819631",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54561509?"
                },
                "id": "54561509",
                "neo_reference_id": "54561509",
                "name": "(2025 VT2)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54561509",
                "absolute_magnitude_h": 28.538,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0052114068,
                        "estimated_diameter_max": 0.0116530599
                    },
                    "meters": {
                        "estimated_diameter_min": 5.2114068155,
                        "estimated_diameter_max": 11.6530598978
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0032382171,
                        "estimated_diameter_max": 0.0072408735
                    },
                    "feet": {
                        "estimated_diameter_min": 17.0977919365,
                        "estimated_diameter_max": 38.2318250352
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-13",
                        "close_approach_date_full": "2025-Nov-13 08:52",
                        "epoch_date_close_approach": 1763023920000,
                        "relative_velocity": {
                            "kilometers_per_second": "14.0581979955",
                            "kilometers_per_hour": "50609.5127837276",
                            "miles_per_hour": "31446.783096089"
                        },
                        "miss_distance": {
                            "astronomical": "0.0014741728",
                            "lunar": "0.5734532192",
                            "kilometers": "220533.110891936",
                            "miles": "137032.9208072768"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "2",
                    "orbit_determination_date": "2025-11-13 05:20:59",
                    "first_observation_date": "2025-11-12",
                    "last_observation_date": "2025-11-13",
                    "data_arc_in_days": 1,
                    "observations_used": 29,
                    "orbit_uncertainty": "7",
                    "minimum_orbit_intersection": ".00118123",
                    "jupiter_tisserand_invariant": "4.024",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".5499107015640794",
                    "semi_major_axis": "1.694536365966619",
                    "inclination": ".08403727388040103",
                    "ascending_node_longitude": "108.5707767799694",
                    "orbital_period": "805.7026038488913",
                    "perihelion_distance": ".7626926841320701",
                    "perihelion_argument": "11.50719176156797",
                    "aphelion_distance": "2.626380047801169",
                    "perihelion_time": "2461038.139372786045",
                    "mean_anomaly": "343.1821640661874",
                    "mean_motion": ".4468149889056554",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": true,
                "sentry_data": "http://api.nasa.gov/neo/rest/v1/neo/sentry/54561509?"
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54561646?"
                },
                "id": "54561646",
                "neo_reference_id": "54561646",
                "name": "(2025 VS3)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54561646",
                "absolute_magnitude_h": 27.698,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0076728194,
                        "estimated_diameter_max": 0.0171569458
                    },
                    "meters": {
                        "estimated_diameter_min": 7.6728194097,
                        "estimated_diameter_max": 17.1569457792
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0047676675,
                        "estimated_diameter_max": 0.0106608286
                    },
                    "feet": {
                        "estimated_diameter_min": 25.1732928321,
                        "estimated_diameter_max": 56.2891939902
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-13",
                        "close_approach_date_full": "2025-Nov-13 00:21",
                        "epoch_date_close_approach": 1762993260000,
                        "relative_velocity": {
                            "kilometers_per_second": "11.4193840308",
                            "kilometers_per_hour": "41109.7825109858",
                            "miles_per_hour": "25544.0201385623"
                        },
                        "miss_distance": {
                            "astronomical": "0.0012189628",
                            "lunar": "0.4741765292",
                            "kilometers": "182354.238489236",
                            "miles": "113309.6695580168"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "1",
                    "orbit_determination_date": "2025-11-14 09:42:01",
                    "first_observation_date": "2025-11-14",
                    "last_observation_date": "2025-11-14",
                    "data_arc_in_days": null,
                    "observations_used": 21,
                    "orbit_uncertainty": "6",
                    "minimum_orbit_intersection": "2.15029E-5",
                    "jupiter_tisserand_invariant": "5.741",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".3439816057924711",
                    "semi_major_axis": "1.062835204135693",
                    "inclination": "5.07829119755786",
                    "ascending_node_longitude": "230.4446418626794",
                    "orbital_period": "400.2186506963261",
                    "perihelion_distance": ".6972394439243287",
                    "perihelion_argument": "81.11643101949115",
                    "aphelion_distance": "1.428430964347058",
                    "perihelion_time": "2460926.766762833050",
                    "mean_anomaly": "66.32365916460719",
                    "mean_motion": ".8995083047070618",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54561650?"
                },
                "id": "54561650",
                "neo_reference_id": "54561650",
                "name": "(2025 VV3)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54561650",
                "absolute_magnitude_h": 28.582,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.005106872,
                        "estimated_diameter_max": 0.011419313
                    },
                    "meters": {
                        "estimated_diameter_min": 5.1068720457,
                        "estimated_diameter_max": 11.4193130466
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0031732622,
                        "estimated_diameter_max": 0.00709563
                    },
                    "feet": {
                        "estimated_diameter_min": 16.7548300825,
                        "estimated_diameter_max": 37.4649390158
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-13",
                        "close_approach_date_full": "2025-Nov-13 21:31",
                        "epoch_date_close_approach": 1763069460000,
                        "relative_velocity": {
                            "kilometers_per_second": "20.7472471669",
                            "kilometers_per_hour": "74690.0898007907",
                            "miles_per_hour": "46409.517187608"
                        },
                        "miss_distance": {
                            "astronomical": "0.0005153157",
                            "lunar": "0.2004578073",
                            "kilometers": "77090.131097559",
                            "miles": "47901.5862379542"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "1",
                    "orbit_determination_date": "2025-11-14 13:42:02",
                    "first_observation_date": "2025-11-14",
                    "last_observation_date": "2025-11-14",
                    "data_arc_in_days": null,
                    "observations_used": 26,
                    "orbit_uncertainty": "7",
                    "minimum_orbit_intersection": ".000424733",
                    "jupiter_tisserand_invariant": "4.655",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".6021205491790071",
                    "semi_major_axis": "1.34662256227648",
                    "inclination": "13.23815536953577",
                    "ascending_node_longitude": "51.32907908181981",
                    "orbital_period": "570.7780414131433",
                    "perihelion_distance": ".535793445541724",
                    "perihelion_argument": "257.3880481472576",
                    "aphelion_distance": "2.157451679011236",
                    "perihelion_time": "2460941.247013389424",
                    "mean_anomaly": "37.37192679486313",
                    "mean_motion": ".6307180267634421",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            }
        ],
        "2025-11-12": [
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3748362?"
                },
                "id": "3748362",
                "neo_reference_id": "3748362",
                "name": "(2016 FC12)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3748362",
                "absolute_magnitude_h": 24.72,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0302381333,
                        "estimated_diameter_max": 0.0676145215
                    },
                    "meters": {
                        "estimated_diameter_min": 30.2381332572,
                        "estimated_diameter_max": 67.6145214758
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0187890991,
                        "estimated_diameter_max": 0.0420137028
                    },
                    "feet": {
                        "estimated_diameter_min": 99.2064771155,
                        "estimated_diameter_max": 221.8324266386
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-12",
                        "close_approach_date_full": "2025-Nov-12 20:56",
                        "epoch_date_close_approach": 1762980960000,
                        "relative_velocity": {
                            "kilometers_per_second": "8.6620544536",
                            "kilometers_per_hour": "31183.3960331001",
                            "miles_per_hour": "19376.1496073449"
                        },
                        "miss_distance": {
                            "astronomical": "0.2326230506",
                            "lunar": "90.4903666834",
                            "kilometers": "34799912.882662222",
                            "miles": "21623663.1627017836"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "6",
                    "orbit_determination_date": "2021-04-15 16:46:46",
                    "first_observation_date": "2016-03-28",
                    "last_observation_date": "2018-03-22",
                    "data_arc_in_days": 724,
                    "observations_used": 33,
                    "orbit_uncertainty": "1",
                    "minimum_orbit_intersection": ".0828694",
                    "jupiter_tisserand_invariant": "4.250",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".4315475051775083",
                    "semi_major_axis": "1.582586006970494",
                    "inclination": "14.70457134818173",
                    "ascending_node_longitude": "2.911683418619702",
                    "orbital_period": "727.1925300317356",
                    "perihelion_distance": ".8996249639335425",
                    "perihelion_argument": "107.9658643731671",
                    "aphelion_distance": "2.265547050007446",
                    "perihelion_time": "2461046.765661207169",
                    "mean_anomaly": "337.0959720476585",
                    "mean_motion": ".4950545902668845",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3752785?"
                },
                "id": "3752785",
                "neo_reference_id": "3752785",
                "name": "(2016 FG60)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3752785",
                "absolute_magnitude_h": 21.42,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.1382149359,
                        "estimated_diameter_max": 0.3090579921
                    },
                    "meters": {
                        "estimated_diameter_min": 138.2149358786,
                        "estimated_diameter_max": 309.0579921303
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0858827529,
                        "estimated_diameter_max": 0.1920396736
                    },
                    "feet": {
                        "estimated_diameter_min": 453.461090228,
                        "estimated_diameter_max": 1013.9698229009
                    }
                },
                "is_potentially_hazardous_asteroid": true,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-12",
                        "close_approach_date_full": "2025-Nov-12 18:13",
                        "epoch_date_close_approach": 1762971180000,
                        "relative_velocity": {
                            "kilometers_per_second": "20.5957208884",
                            "kilometers_per_hour": "74144.5951982756",
                            "miles_per_hour": "46070.5680552841"
                        },
                        "miss_distance": {
                            "astronomical": "0.4495605139",
                            "lunar": "174.8790399071",
                            "kilometers": "67253295.315545393",
                            "miles": "41789259.9153487034"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "8",
                    "orbit_determination_date": "2021-04-15 16:49:21",
                    "first_observation_date": "2016-03-03",
                    "last_observation_date": "2020-06-17",
                    "data_arc_in_days": 1567,
                    "observations_used": 24,
                    "orbit_uncertainty": "3",
                    "minimum_orbit_intersection": "4.49864E-5",
                    "jupiter_tisserand_invariant": "4.514",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".6086121673512135",
                    "semi_major_axis": "1.406272663051395",
                    "inclination": "9.319898939282334",
                    "ascending_node_longitude": "297.3981011441768",
                    "orbital_period": "609.1198164060902",
                    "perihelion_distance": ".5503980097049227",
                    "perihelion_argument": "102.3160585658377",
                    "aphelion_distance": "2.262147316397867",
                    "perihelion_time": "2460987.279149010605",
                    "mean_anomaly": "7.813744074628792",
                    "mean_motion": ".5910167266007874",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3781991?"
                },
                "id": "3781991",
                "neo_reference_id": "3781991",
                "name": "(2017 SP19)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3781991",
                "absolute_magnitude_h": 23.09,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0640552863,
                        "estimated_diameter_max": 0.1432319745
                    },
                    "meters": {
                        "estimated_diameter_min": 64.0552862945,
                        "estimated_diameter_max": 143.2319744727
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0398020973,
                        "estimated_diameter_max": 0.0890001952
                    },
                    "feet": {
                        "estimated_diameter_min": 210.1551454864,
                        "estimated_diameter_max": 469.921191129
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-12",
                        "close_approach_date_full": "2025-Nov-12 19:07",
                        "epoch_date_close_approach": 1762974420000,
                        "relative_velocity": {
                            "kilometers_per_second": "10.48339347",
                            "kilometers_per_hour": "37740.2164921091",
                            "miles_per_hour": "23450.3028531108"
                        },
                        "miss_distance": {
                            "astronomical": "0.1639759794",
                            "lunar": "63.7866559866",
                            "kilometers": "24530457.249403878",
                            "miles": "15242519.3297663964"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "32",
                    "orbit_determination_date": "2025-11-11 05:44:08",
                    "first_observation_date": "2017-09-25",
                    "last_observation_date": "2025-11-11",
                    "data_arc_in_days": 2969,
                    "observations_used": 125,
                    "orbit_uncertainty": "0",
                    "minimum_orbit_intersection": ".0709685",
                    "jupiter_tisserand_invariant": "3.187",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".5803554355977313",
                    "semi_major_axis": "2.531492116602485",
                    "inclination": "4.910139641469551",
                    "ascending_node_longitude": "43.7407030576487",
                    "orbital_period": "1471.171475482573",
                    "perihelion_distance": "1.062326906559427",
                    "perihelion_argument": "342.7743351183859",
                    "aphelion_distance": "4.000657326645543",
                    "perihelion_time": "2460977.930769006478",
                    "mean_anomaly": "5.52275740324754",
                    "mean_motion": ".2447029499956237",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "AMO",
                        "orbit_class_description": "Near-Earth asteroid orbits similar to that of 1221 Amor",
                        "orbit_class_range": "1.017 AU < q (perihelion) < 1.3 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3789662?"
                },
                "id": "3789662",
                "neo_reference_id": "3789662",
                "name": "(2017 WJ14)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3789662",
                "absolute_magnitude_h": 24.51,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0333084924,
                        "estimated_diameter_max": 0.0744800533
                    },
                    "meters": {
                        "estimated_diameter_min": 33.3084924299,
                        "estimated_diameter_max": 74.4800533014
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0206969312,
                        "estimated_diameter_max": 0.0462797452
                    },
                    "feet": {
                        "estimated_diameter_min": 109.2798343039,
                        "estimated_diameter_max": 244.3571380733
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-12",
                        "close_approach_date_full": "2025-Nov-12 16:15",
                        "epoch_date_close_approach": 1762964100000,
                        "relative_velocity": {
                            "kilometers_per_second": "8.739319494",
                            "kilometers_per_hour": "31461.5501784828",
                            "miles_per_hour": "19548.98377618"
                        },
                        "miss_distance": {
                            "astronomical": "0.2513660358",
                            "lunar": "97.7813879262",
                            "kilometers": "37603823.546023746",
                            "miles": "23365932.4588138548"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "5",
                    "orbit_determination_date": "2021-04-15 20:07:44",
                    "first_observation_date": "2017-11-22",
                    "last_observation_date": "2019-11-18",
                    "data_arc_in_days": 726,
                    "observations_used": 21,
                    "orbit_uncertainty": "1",
                    "minimum_orbit_intersection": ".12926",
                    "jupiter_tisserand_invariant": "4.291",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".323144484012059",
                    "semi_major_axis": "1.581940253723989",
                    "inclination": "16.26949033590008",
                    "ascending_node_longitude": "242.0591634752554",
                    "orbital_period": "726.7474935254153",
                    "perihelion_distance": "1.070744986696445",
                    "perihelion_argument": "139.3535481739653",
                    "aphelion_distance": "2.093135520751534",
                    "perihelion_time": "2460951.673554170669",
                    "mean_anomaly": "24.18655813079095",
                    "mean_motion": ".4953577455818364",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "AMO",
                        "orbit_class_description": "Near-Earth asteroid orbits similar to that of 1221 Amor",
                        "orbit_class_range": "1.017 AU < q (perihelion) < 1.3 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3989190?"
                },
                "id": "3989190",
                "neo_reference_id": "3989190",
                "name": "(2020 BL8)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3989190",
                "absolute_magnitude_h": 25.71,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0191670368,
                        "estimated_diameter_max": 0.0428587972
                    },
                    "meters": {
                        "estimated_diameter_min": 19.1670367967,
                        "estimated_diameter_max": 42.8587972046
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0119098408,
                        "estimated_diameter_max": 0.0266312137
                    },
                    "feet": {
                        "estimated_diameter_min": 62.883981004,
                        "estimated_diameter_max": 140.6128562208
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-12",
                        "close_approach_date_full": "2025-Nov-12 08:45",
                        "epoch_date_close_approach": 1762937100000,
                        "relative_velocity": {
                            "kilometers_per_second": "3.8830804535",
                            "kilometers_per_hour": "13979.0896326071",
                            "miles_per_hour": "8686.0626664386"
                        },
                        "miss_distance": {
                            "astronomical": "0.3192252896",
                            "lunar": "124.1786376544",
                            "kilometers": "47755423.374293152",
                            "miles": "29673844.0903514176"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "14",
                    "orbit_determination_date": "2021-04-15 22:15:24",
                    "first_observation_date": "2020-01-24",
                    "last_observation_date": "2020-03-17",
                    "data_arc_in_days": 53,
                    "observations_used": 57,
                    "orbit_uncertainty": "5",
                    "minimum_orbit_intersection": ".0157251",
                    "jupiter_tisserand_invariant": "4.925",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".2439926553357134",
                    "semi_major_axis": "1.31767994151965",
                    "inclination": "1.348939856293715",
                    "ascending_node_longitude": "282.3720641275522",
                    "orbital_period": "552.4758887728935",
                    "perihelion_distance": ".996175713705663",
                    "perihelion_argument": "213.4751673927997",
                    "aphelion_distance": "1.639184169333637",
                    "perihelion_time": "2461093.775837990194",
                    "mean_anomaly": "299.2203309522645",
                    "mean_motion": ".6516121469112389",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54016668?"
                },
                "id": "54016668",
                "neo_reference_id": "54016668",
                "name": "(2020 HN3)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54016668",
                "absolute_magnitude_h": 29.4,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0035039264,
                        "estimated_diameter_max": 0.0078350176
                    },
                    "meters": {
                        "estimated_diameter_min": 3.5039264111,
                        "estimated_diameter_max": 7.8350176433
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0021772383,
                        "estimated_diameter_max": 0.0048684527
                    },
                    "feet": {
                        "estimated_diameter_min": 11.4958219265,
                        "estimated_diameter_max": 25.705439285
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-12",
                        "close_approach_date_full": "2025-Nov-12 20:10",
                        "epoch_date_close_approach": 1762978200000,
                        "relative_velocity": {
                            "kilometers_per_second": "17.6567248807",
                            "kilometers_per_hour": "63564.2095705499",
                            "miles_per_hour": "39496.3278856564"
                        },
                        "miss_distance": {
                            "astronomical": "0.4547630628",
                            "lunar": "176.9028314292",
                            "kilometers": "68031585.549556236",
                            "miles": "42272867.0416026168"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "2",
                    "orbit_determination_date": "2021-04-15 22:25:15",
                    "first_observation_date": "2020-04-19",
                    "last_observation_date": "2020-04-22",
                    "data_arc_in_days": 3,
                    "observations_used": 12,
                    "orbit_uncertainty": "6",
                    "minimum_orbit_intersection": ".00136229",
                    "jupiter_tisserand_invariant": "5.982",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".1151691580793686",
                    "semi_major_axis": "1.019542626628126",
                    "inclination": "2.919119730374899",
                    "ascending_node_longitude": "29.36327225977114",
                    "orbital_period": "376.0161592676225",
                    "perihelion_distance": ".9021227606933366",
                    "perihelion_argument": "277.2549658057715",
                    "aphelion_distance": "1.136962492562915",
                    "perihelion_time": "2460925.030472887730",
                    "mean_anomaly": "72.25495258856766",
                    "mean_motion": ".9574056623023393",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": true,
                "sentry_data": "http://api.nasa.gov/neo/rest/v1/neo/sentry/54016668?"
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54350423?"
                },
                "id": "54350423",
                "neo_reference_id": "54350423",
                "name": "(2023 FZ)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54350423",
                "absolute_magnitude_h": 26.55,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.013018321,
                        "estimated_diameter_max": 0.0291098508
                    },
                    "meters": {
                        "estimated_diameter_min": 13.0183210188,
                        "estimated_diameter_max": 29.109850751
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0080892071,
                        "estimated_diameter_max": 0.0180880171
                    },
                    "feet": {
                        "estimated_diameter_min": 42.7110283314,
                        "estimated_diameter_max": 95.5047627378
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-12",
                        "close_approach_date_full": "2025-Nov-12 22:10",
                        "epoch_date_close_approach": 1762985400000,
                        "relative_velocity": {
                            "kilometers_per_second": "21.9007889483",
                            "kilometers_per_hour": "78842.8402139315",
                            "miles_per_hour": "48989.8747984843"
                        },
                        "miss_distance": {
                            "astronomical": "0.3545619356",
                            "lunar": "137.9245929484",
                            "kilometers": "53041710.348837172",
                            "miles": "32958590.5006180936"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "2",
                    "orbit_determination_date": "2023-03-29 06:33:17",
                    "first_observation_date": "2023-03-18",
                    "last_observation_date": "2023-03-29",
                    "data_arc_in_days": 11,
                    "observations_used": 20,
                    "orbit_uncertainty": "8",
                    "minimum_orbit_intersection": ".0259118",
                    "jupiter_tisserand_invariant": "3.587",
                    "epoch_osculation": "2460021.5",
                    "eccentricity": ".5685064293402022",
                    "semi_major_axis": "2.024095376044519",
                    "inclination": "7.987245330381414",
                    "ascending_node_longitude": "3.788420215965907",
                    "orbital_period": "1051.828383403501",
                    "perihelion_distance": ".8733841411654355",
                    "perihelion_argument": "119.908105039424",
                    "aphelion_distance": "3.174806610923602",
                    "perihelion_time": "2459981.746961345163",
                    "mean_anomaly": "13.60592102433436",
                    "mean_motion": ".3422611575047192",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54394001?"
                },
                "id": "54394001",
                "neo_reference_id": "54394001",
                "name": "(2023 TT19)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54394001",
                "absolute_magnitude_h": 23.18,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0614546821,
                        "estimated_diameter_max": 0.1374168468
                    },
                    "meters": {
                        "estimated_diameter_min": 61.4546821229,
                        "estimated_diameter_max": 137.4168467624
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0381861573,
                        "estimated_diameter_max": 0.0853868435
                    },
                    "feet": {
                        "estimated_diameter_min": 201.622979296,
                        "estimated_diameter_max": 450.8426875319
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-12",
                        "close_approach_date_full": "2025-Nov-12 02:34",
                        "epoch_date_close_approach": 1762914840000,
                        "relative_velocity": {
                            "kilometers_per_second": "13.2577681317",
                            "kilometers_per_hour": "47727.9652739472",
                            "miles_per_hour": "29656.3015336924"
                        },
                        "miss_distance": {
                            "astronomical": "0.4584190394",
                            "lunar": "178.3250063266",
                            "kilometers": "68578511.861686078",
                            "miles": "42612711.2931727564"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "1",
                    "orbit_determination_date": "2023-10-16 23:42:03",
                    "first_observation_date": "2023-10-12",
                    "last_observation_date": "2023-10-17",
                    "data_arc_in_days": 5,
                    "observations_used": 15,
                    "orbit_uncertainty": "8",
                    "minimum_orbit_intersection": ".120684",
                    "jupiter_tisserand_invariant": "6.106",
                    "epoch_osculation": "2460232.5",
                    "eccentricity": ".4653167558407985",
                    "semi_major_axis": ".9682995589719657",
                    "inclination": "16.56561053174343",
                    "ascending_node_longitude": "25.58796298235287",
                    "orbital_period": "348.0270721546318",
                    "perihelion_distance": ".5177335495090547",
                    "perihelion_argument": "211.1416747276942",
                    "aphelion_distance": "1.418865568434877",
                    "perihelion_time": "2460129.530511481304",
                    "mean_anomaly": "106.5118745999749",
                    "mean_motion": "1.034402288796799",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "ATE",
                        "orbit_class_description": "Near-Earth asteroid orbits similar to that of 2062 Aten",
                        "orbit_class_range": "a (semi-major axis) < 1.0 AU; q (perihelion) > 0.983 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54553939?"
                },
                "id": "54553939",
                "neo_reference_id": "54553939",
                "name": "(2025 UB3)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54553939",
                "absolute_magnitude_h": 23.21,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0606114923,
                        "estimated_diameter_max": 0.1355314169
                    },
                    "meters": {
                        "estimated_diameter_min": 60.6114922738,
                        "estimated_diameter_max": 135.5314169419
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0376622236,
                        "estimated_diameter_max": 0.0842152921
                    },
                    "feet": {
                        "estimated_diameter_min": 198.8566083115,
                        "estimated_diameter_max": 444.6568939595
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-12",
                        "close_approach_date_full": "2025-Nov-12 15:44",
                        "epoch_date_close_approach": 1762962240000,
                        "relative_velocity": {
                            "kilometers_per_second": "3.5119665109",
                            "kilometers_per_hour": "12643.0794392809",
                            "miles_per_hour": "7855.9178882576"
                        },
                        "miss_distance": {
                            "astronomical": "0.1796282125",
                            "lunar": "69.8753746625",
                            "kilometers": "26871997.981907375",
                            "miles": "16697485.273276775"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "4",
                    "orbit_determination_date": "2025-10-30 06:27:30",
                    "first_observation_date": "2025-10-19",
                    "last_observation_date": "2025-10-29",
                    "data_arc_in_days": 10,
                    "observations_used": 23,
                    "orbit_uncertainty": "8",
                    "minimum_orbit_intersection": ".131406",
                    "jupiter_tisserand_invariant": "4.129",
                    "epoch_osculation": "2460968.5",
                    "eccentricity": ".3422942360209912",
                    "semi_major_axis": "1.702886271599512",
                    "inclination": "2.702205526810409",
                    "ascending_node_longitude": "73.64930869724142",
                    "orbital_period": "811.6651387506836",
                    "perihelion_distance": "1.119998116231723",
                    "perihelion_argument": "335.3577201499543",
                    "aphelion_distance": "2.285774426967301",
                    "perihelion_time": "2460984.190552895082",
                    "mean_anomaly": "353.0407272992852",
                    "mean_motion": ".4435326624402184",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "AMO",
                        "orbit_class_description": "Near-Earth asteroid orbits similar to that of 1221 Amor",
                        "orbit_class_range": "1.017 AU < q (perihelion) < 1.3 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54561041?"
                },
                "id": "54561041",
                "neo_reference_id": "54561041",
                "name": "(2025 VW)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54561041",
                "absolute_magnitude_h": 26.665,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.012346816,
                        "estimated_diameter_max": 0.0276083199
                    },
                    "meters": {
                        "estimated_diameter_min": 12.3468160154,
                        "estimated_diameter_max": 27.6083199162
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0076719534,
                        "estimated_diameter_max": 0.0171550094
                    },
                    "feet": {
                        "estimated_diameter_min": 40.507927856,
                        "estimated_diameter_max": 90.5784803137
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-12",
                        "close_approach_date_full": "2025-Nov-12 13:38",
                        "epoch_date_close_approach": 1762954680000,
                        "relative_velocity": {
                            "kilometers_per_second": "7.13085659",
                            "kilometers_per_hour": "25671.0837240376",
                            "miles_per_hour": "15951.0131061944"
                        },
                        "miss_distance": {
                            "astronomical": "0.0138992484",
                            "lunar": "5.4068076276",
                            "kilometers": "2079297.955240908",
                            "miles": "1292015.8378162104"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "2",
                    "orbit_determination_date": "2025-11-10 05:32:07",
                    "first_observation_date": "2025-11-09",
                    "last_observation_date": "2025-11-10",
                    "data_arc_in_days": 1,
                    "observations_used": 29,
                    "orbit_uncertainty": "7",
                    "minimum_orbit_intersection": ".0100831",
                    "jupiter_tisserand_invariant": "4.801",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".303537798117707",
                    "semi_major_axis": "1.355443412768921",
                    "inclination": "8.369366301689602",
                    "ascending_node_longitude": "225.7539204069087",
                    "orbital_period": "576.3954101226759",
                    "perihelion_distance": ".9440151037838925",
                    "perihelion_argument": "222.4467626140969",
                    "aphelion_distance": "1.76687172175395",
                    "perihelion_time": "2461024.670453272660",
                    "mean_anomaly": "344.9038298616819",
                    "mean_motion": ".624571246886543",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54561379?"
                },
                "id": "54561379",
                "neo_reference_id": "54561379",
                "name": "(2025 VC2)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54561379",
                "absolute_magnitude_h": 27.032,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0104268944,
                        "estimated_diameter_max": 0.0233152447
                    },
                    "meters": {
                        "estimated_diameter_min": 10.4268944343,
                        "estimated_diameter_max": 23.3152447493
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0064789698,
                        "estimated_diameter_max": 0.0144874169
                    },
                    "feet": {
                        "estimated_diameter_min": 34.2089723358,
                        "estimated_diameter_max": 76.4935875833
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-12",
                        "close_approach_date_full": "2025-Nov-12 19:57",
                        "epoch_date_close_approach": 1762977420000,
                        "relative_velocity": {
                            "kilometers_per_second": "9.1996014666",
                            "kilometers_per_hour": "33118.5652796016",
                            "miles_per_hour": "20578.5885205391"
                        },
                        "miss_distance": {
                            "astronomical": "0.0206094416",
                            "lunar": "8.0170727824",
                            "kilometers": "3083128.565249392",
                            "miles": "1915767.2551379296"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "1",
                    "orbit_determination_date": "2025-11-11 16:42:03",
                    "first_observation_date": "2025-11-10",
                    "last_observation_date": "2025-11-11",
                    "data_arc_in_days": 1,
                    "observations_used": 22,
                    "orbit_uncertainty": "7",
                    "minimum_orbit_intersection": ".0203045",
                    "jupiter_tisserand_invariant": "5.237",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".1875351538378033",
                    "semi_major_axis": "1.201769487088119",
                    "inclination": "16.0519950231558",
                    "ascending_node_longitude": "228.9175150520106",
                    "orbital_period": "481.2050612024777",
                    "perihelion_distance": ".9763954614494711",
                    "perihelion_argument": "218.691488479854",
                    "aphelion_distance": "1.427143512726768",
                    "perihelion_time": "2461026.695660606284",
                    "mean_anomaly": "340.4024550475497",
                    "mean_motion": ".7481218071572235",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54561501?"
                },
                "id": "54561501",
                "neo_reference_id": "54561501",
                "name": "(2025 VN2)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54561501",
                "absolute_magnitude_h": 26.733,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0119661647,
                        "estimated_diameter_max": 0.0267571577
                    },
                    "meters": {
                        "estimated_diameter_min": 11.9661647141,
                        "estimated_diameter_max": 26.7571577308
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0074354277,
                        "estimated_diameter_max": 0.0166261219
                    },
                    "feet": {
                        "estimated_diameter_min": 39.2590718408,
                        "estimated_diameter_max": 87.7859533695
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-12",
                        "close_approach_date_full": "2025-Nov-12 17:43",
                        "epoch_date_close_approach": 1762969380000,
                        "relative_velocity": {
                            "kilometers_per_second": "5.2015859923",
                            "kilometers_per_hour": "18725.7095721764",
                            "miles_per_hour": "11635.4277061115"
                        },
                        "miss_distance": {
                            "astronomical": "0.0343100217",
                            "lunar": "13.3465984413",
                            "kilometers": "5132706.165973779",
                            "miles": "3189315.7210009902"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "2",
                    "orbit_determination_date": "2025-11-14 05:39:13",
                    "first_observation_date": "2025-11-11",
                    "last_observation_date": "2025-11-13",
                    "data_arc_in_days": 2,
                    "observations_used": 25,
                    "orbit_uncertainty": "7",
                    "minimum_orbit_intersection": ".0328221",
                    "jupiter_tisserand_invariant": "4.487",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".3172611767412017",
                    "semi_major_axis": "1.496843465134605",
                    "inclination": "6.529804839794453",
                    "ascending_node_longitude": "234.0195675081308",
                    "orbital_period": "668.9027868515045",
                    "perihelion_distance": "1.021953145988622",
                    "perihelion_argument": "179.0327075847642",
                    "aphelion_distance": "1.971733784280587",
                    "perihelion_time": "2460994.348952582822",
                    "mean_anomaly": "3.310461719866468",
                    "mean_motion": ".5381947976244857",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "AMO",
                        "orbit_class_description": "Near-Earth asteroid orbits similar to that of 1221 Amor",
                        "orbit_class_range": "1.017 AU < q (perihelion) < 1.3 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54561512?"
                },
                "id": "54561512",
                "neo_reference_id": "54561512",
                "name": "(2025 VW2)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54561512",
                "absolute_magnitude_h": 25.194,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0243083218,
                        "estimated_diameter_max": 0.0543550599
                    },
                    "meters": {
                        "estimated_diameter_min": 24.3083217769,
                        "estimated_diameter_max": 54.3550599122
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0151044862,
                        "estimated_diameter_max": 0.0337746579
                    },
                    "feet": {
                        "estimated_diameter_min": 79.7517144187,
                        "estimated_diameter_max": 178.3302547623
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-12",
                        "close_approach_date_full": "2025-Nov-12 01:27",
                        "epoch_date_close_approach": 1762910820000,
                        "relative_velocity": {
                            "kilometers_per_second": "14.2755823018",
                            "kilometers_per_hour": "51392.0962863821",
                            "miles_per_hour": "31933.0500508356"
                        },
                        "miss_distance": {
                            "astronomical": "0.0576699432",
                            "lunar": "22.4336079048",
                            "kilometers": "8627300.665740984",
                            "miles": "5360756.0521302192"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "1",
                    "orbit_determination_date": "2025-11-13 04:12:03",
                    "first_observation_date": "2025-11-10",
                    "last_observation_date": "2025-11-13",
                    "data_arc_in_days": 3,
                    "observations_used": 20,
                    "orbit_uncertainty": "8",
                    "minimum_orbit_intersection": ".0575665",
                    "jupiter_tisserand_invariant": "4.875",
                    "epoch_osculation": "2460990.5",
                    "eccentricity": ".2178271270842728",
                    "semi_major_axis": "1.301439029018706",
                    "inclination": "26.10888326356355",
                    "ascending_node_longitude": "228.1724769166185",
                    "orbital_period": "542.2932102715472",
                    "perihelion_distance": "1.017950304252216",
                    "perihelion_argument": "213.4425868165709",
                    "aphelion_distance": "1.584927753785197",
                    "perihelion_time": "2461022.414076071878",
                    "mean_anomaly": "338.813919908525",
                    "mean_motion": ".6638475149259827",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "AMO",
                        "orbit_class_description": "Near-Earth asteroid orbits similar to that of 1221 Amor",
                        "orbit_class_range": "1.017 AU < q (perihelion) < 1.3 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54561594?"
                },
                "id": "54561594",
                "neo_reference_id": "54561594",
                "name": "(2025 VB3)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54561594",
                "absolute_magnitude_h": 27.828,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0072269488,
                        "estimated_diameter_max": 0.0161599487
                    },
                    "meters": {
                        "estimated_diameter_min": 7.226948778,
                        "estimated_diameter_max": 16.1599487375
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0044906164,
                        "estimated_diameter_max": 0.0100413235
                    },
                    "feet": {
                        "estimated_diameter_min": 23.7104626288,
                        "estimated_diameter_max": 53.018206216
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-12",
                        "close_approach_date_full": "2025-Nov-12 00:24",
                        "epoch_date_close_approach": 1762907040000,
                        "relative_velocity": {
                            "kilometers_per_second": "3.6150626408",
                            "kilometers_per_hour": "13014.2255069365",
                            "miles_per_hour": "8086.5336212406"
                        },
                        "miss_distance": {
                            "astronomical": "0.0345101495",
                            "lunar": "13.4244481555",
                            "kilometers": "5162644.858581565",
                            "miles": "3207918.761952997"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "2",
                    "orbit_determination_date": "2025-11-14 05:39:13",
                    "first_observation_date": "2025-11-12",
                    "last_observation_date": "2025-11-14",
                    "data_arc_in_days": 2,
                    "observations_used": 27,
                    "orbit_uncertainty": "8",
                    "minimum_orbit_intersection": ".0340195",
                    "jupiter_tisserand_invariant": "4.592",
                    "epoch_osculation": "2460991.5",
                    "eccentricity": ".2948577860758753",
                    "semi_major_axis": "1.452240526507917",
                    "inclination": "2.087290624304257",
                    "ascending_node_longitude": "225.8505317754682",
                    "orbital_period": "639.2286843691854",
                    "perihelion_distance": "1.024036100012129",
                    "perihelion_argument": "184.7638704667062",
                    "aphelion_distance": "1.880444953003705",
                    "perihelion_time": "2460992.755620591887",
                    "mean_anomaly": "359.2928611870329",
                    "mean_motion": ".5631787321234831",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "AMO",
                        "orbit_class_description": "Near-Earth asteroid orbits similar to that of 1221 Amor",
                        "orbit_class_range": "1.017 AU < q (perihelion) < 1.3 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54561596?"
                },
                "id": "54561596",
                "neo_reference_id": "54561596",
                "name": "(2025 VJ3)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54561596",
                "absolute_magnitude_h": 24.63,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0315177333,
                        "estimated_diameter_max": 0.0704757942
                    },
                    "meters": {
                        "estimated_diameter_min": 31.5177333263,
                        "estimated_diameter_max": 70.4757942143
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0195842055,
                        "estimated_diameter_max": 0.0437916147
                    },
                    "feet": {
                        "estimated_diameter_min": 103.4046402062,
                        "estimated_diameter_max": 231.21980469
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-12",
                        "close_approach_date_full": "2025-Nov-12 09:18",
                        "epoch_date_close_approach": 1762939080000,
                        "relative_velocity": {
                            "kilometers_per_second": "12.9433323896",
                            "kilometers_per_hour": "46595.9966027148",
                            "miles_per_hour": "28952.9402223924"
                        },
                        "miss_distance": {
                            "astronomical": "0.0119634395",
                            "lunar": "4.6537779655",
                            "kilometers": "1789705.067073865",
                            "miles": "1112071.161254737"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "2",
                    "orbit_determination_date": "2025-11-14 05:39:13",
                    "first_observation_date": "2025-11-12",
                    "last_observation_date": "2025-11-14",
                    "data_arc_in_days": 2,
                    "observations_used": 67,
                    "orbit_uncertainty": "7",
                    "minimum_orbit_intersection": ".00967501",
                    "jupiter_tisserand_invariant": "3.317",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".6090629557205197",
                    "semi_major_axis": "2.290405698087823",
                    "inclination": "6.869235818570044",
                    "ascending_node_longitude": "53.35440972877916",
                    "orbital_period": "1266.097205005069",
                    "perihelion_distance": ".8954044338113332",
                    "perihelion_argument": "313.2585261691441",
                    "aphelion_distance": "3.685406962364313",
                    "perihelion_time": "2460960.630178669797",
                    "mean_anomaly": "11.33651952009136",
                    "mean_motion": ".2843383577318289",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54561597?"
                },
                "id": "54561597",
                "neo_reference_id": "54561597",
                "name": "(2025 VL3)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54561597",
                "absolute_magnitude_h": 29.355,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0035772968,
                        "estimated_diameter_max": 0.0079990789
                    },
                    "meters": {
                        "estimated_diameter_min": 3.5772968211,
                        "estimated_diameter_max": 7.9990788676
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0022228285,
                        "estimated_diameter_max": 0.0049703956
                    },
                    "feet": {
                        "estimated_diameter_min": 11.7365385025,
                        "estimated_diameter_max": 26.2436979121
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-12",
                        "close_approach_date_full": "2025-Nov-12 06:27",
                        "epoch_date_close_approach": 1762928820000,
                        "relative_velocity": {
                            "kilometers_per_second": "15.5334872309",
                            "kilometers_per_hour": "55920.5540311327",
                            "miles_per_hour": "34746.8575867336"
                        },
                        "miss_distance": {
                            "astronomical": "0.0008160704",
                            "lunar": "0.3174513856",
                            "kilometers": "122082.393610048",
                            "miles": "75858.4817847424"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "2",
                    "orbit_determination_date": "2025-11-14 05:39:13",
                    "first_observation_date": "2025-11-12",
                    "last_observation_date": "2025-11-13",
                    "data_arc_in_days": 1,
                    "observations_used": 40,
                    "orbit_uncertainty": "7",
                    "minimum_orbit_intersection": ".000408455",
                    "jupiter_tisserand_invariant": "4.089",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".5471249945133929",
                    "semi_major_axis": "1.651623886515107",
                    "inclination": "5.828183854977726",
                    "ascending_node_longitude": "49.96680542575947",
                    "orbital_period": "775.2917447915632",
                    "perihelion_distance": ".7479791766673403",
                    "perihelion_argument": "287.7271987808194",
                    "aphelion_distance": "2.555268596362873",
                    "perihelion_time": "2460945.285895395526",
                    "mean_anomaly": "25.63819077288731",
                    "mean_motion": ".4643413301102358",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54561649?"
                },
                "id": "54561649",
                "neo_reference_id": "54561649",
                "name": "(2025 VX3)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54561649",
                "absolute_magnitude_h": 27.001,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0105768167,
                        "estimated_diameter_max": 0.0236504811
                    },
                    "meters": {
                        "estimated_diameter_min": 10.5768166675,
                        "estimated_diameter_max": 23.6504810541
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0065721271,
                        "estimated_diameter_max": 0.0146957231
                    },
                    "feet": {
                        "estimated_diameter_min": 34.7008431955,
                        "estimated_diameter_max": 77.5934442616
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-12",
                        "close_approach_date_full": "2025-Nov-12 08:05",
                        "epoch_date_close_approach": 1762934700000,
                        "relative_velocity": {
                            "kilometers_per_second": "14.2324242015",
                            "kilometers_per_hour": "51236.7271252582",
                            "miles_per_hour": "31836.5096962472"
                        },
                        "miss_distance": {
                            "astronomical": "0.014138545",
                            "lunar": "5.499894005",
                            "kilometers": "2115096.21689915",
                            "miles": "1314259.84614227"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "1",
                    "orbit_determination_date": "2025-11-14 13:42:02",
                    "first_observation_date": "2025-11-14",
                    "last_observation_date": "2025-11-14",
                    "data_arc_in_days": null,
                    "observations_used": 23,
                    "orbit_uncertainty": "8",
                    "minimum_orbit_intersection": ".0130781",
                    "jupiter_tisserand_invariant": "4.696",
                    "epoch_osculation": "2460993.5",
                    "eccentricity": ".423228707350186",
                    "semi_major_axis": "1.371139913370332",
                    "inclination": "14.3038093607315",
                    "ascending_node_longitude": "51.99853531818226",
                    "orbital_period": "586.4366262899257",
                    "perihelion_distance": ".7908341402383603",
                    "perihelion_argument": "285.1560713290118",
                    "aphelion_distance": "1.951445686502303",
                    "perihelion_time": "2460940.791350132076",
                    "mean_anomaly": "32.35663173444358",
                    "mean_motion": ".6138770736021888",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54561653?"
                },
                "id": "54561653",
                "neo_reference_id": "54561653",
                "name": "(2025 VZ3)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54561653",
                "absolute_magnitude_h": 25.721,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0190701881,
                        "estimated_diameter_max": 0.0426422369
                    },
                    "meters": {
                        "estimated_diameter_min": 19.0701880934,
                        "estimated_diameter_max": 42.6422369204
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0118496618,
                        "estimated_diameter_max": 0.0264966494
                    },
                    "feet": {
                        "estimated_diameter_min": 62.5662359042,
                        "estimated_diameter_max": 139.9023565781
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-12",
                        "close_approach_date_full": "2025-Nov-12 21:07",
                        "epoch_date_close_approach": 1762981620000,
                        "relative_velocity": {
                            "kilometers_per_second": "9.4208594626",
                            "kilometers_per_hour": "33915.0940654512",
                            "miles_per_hour": "21073.5205319466"
                        },
                        "miss_distance": {
                            "astronomical": "0.033779315",
                            "lunar": "13.140153535",
                            "kilometers": "5053313.57405905",
                            "miles": "3139983.45195289"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "1",
                    "orbit_determination_date": "2025-11-14 18:12:02",
                    "first_observation_date": "2025-11-14",
                    "last_observation_date": "2025-11-15",
                    "data_arc_in_days": 1,
                    "observations_used": 32,
                    "orbit_uncertainty": "8",
                    "minimum_orbit_intersection": ".00333655",
                    "jupiter_tisserand_invariant": "3.315",
                    "epoch_osculation": "2460993.5",
                    "eccentricity": ".5804672474672059",
                    "semi_major_axis": "2.339869823225625",
                    "inclination": "1.789226186339008",
                    "ascending_node_longitude": "45.79738726377079",
                    "orbital_period": "1307.332240452679",
                    "perihelion_distance": ".9816520275062689",
                    "perihelion_argument": "339.5448077341883",
                    "aphelion_distance": "3.698087618944982",
                    "perihelion_time": "2460973.434955451423",
                    "mean_anomaly": "5.525310104022622",
                    "mean_motion": ".2753699395307086",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            }
        ],
        "2025-11-08": [
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/2481127?"
                },
                "id": "2481127",
                "neo_reference_id": "2481127",
                "name": "481127 (2005 UJ6)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=2481127",
                "absolute_magnitude_h": 21.5,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.1332155667,
                        "estimated_diameter_max": 0.2978790628
                    },
                    "meters": {
                        "estimated_diameter_min": 133.2155666981,
                        "estimated_diameter_max": 297.8790627982
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0827762899,
                        "estimated_diameter_max": 0.1850934111
                    },
                    "feet": {
                        "estimated_diameter_min": 437.0589598459,
                        "estimated_diameter_max": 977.2935443908
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-08",
                        "close_approach_date_full": "2025-Nov-08 02:33",
                        "epoch_date_close_approach": 1762569180000,
                        "relative_velocity": {
                            "kilometers_per_second": "27.9761751978",
                            "kilometers_per_hour": "100714.230712031",
                            "miles_per_hour": "62579.9062999284"
                        },
                        "miss_distance": {
                            "astronomical": "0.4759368742",
                            "lunar": "185.1394440638",
                            "kilometers": "71199142.634777954",
                            "miles": "44241095.7463816052"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "19",
                    "orbit_determination_date": "2021-04-14 16:59:23",
                    "first_observation_date": "2005-09-30",
                    "last_observation_date": "2016-11-20",
                    "data_arc_in_days": 4069,
                    "observations_used": 51,
                    "orbit_uncertainty": "1",
                    "minimum_orbit_intersection": ".124765",
                    "jupiter_tisserand_invariant": "5.649",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".4160490181444915",
                    "semi_major_axis": "1.068402592682881",
                    "inclination": "18.99980204768793",
                    "ascending_node_longitude": "42.35511089215206",
                    "orbital_period": "403.3674287595384",
                    "perihelion_distance": ".6238947430141393",
                    "perihelion_argument": "131.407469381918",
                    "aphelion_distance": "1.512910442351623",
                    "perihelion_time": "2461045.809500685675",
                    "mean_anomaly": "319.5618805985284",
                    "mean_motion": ".8924865379118372",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3432703?"
                },
                "id": "3432703",
                "neo_reference_id": "3432703",
                "name": "(2008 US2)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3432703",
                "absolute_magnitude_h": 23.89,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0443154309,
                        "estimated_diameter_max": 0.099092316
                    },
                    "meters": {
                        "estimated_diameter_min": 44.3154309096,
                        "estimated_diameter_max": 99.0923159661
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0275363236,
                        "estimated_diameter_max": 0.0615730915
                    },
                    "feet": {
                        "estimated_diameter_min": 145.3918383455,
                        "estimated_diameter_max": 325.1060339141
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-08",
                        "close_approach_date_full": "2025-Nov-08 16:40",
                        "epoch_date_close_approach": 1762620000000,
                        "relative_velocity": {
                            "kilometers_per_second": "3.3830287516",
                            "kilometers_per_hour": "12178.9035056548",
                            "miles_per_hour": "7567.4970143887"
                        },
                        "miss_distance": {
                            "astronomical": "0.126141906",
                            "lunar": "49.069201434",
                            "kilometers": "18870560.45534022",
                            "miles": "11725622.542606236"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "23",
                    "orbit_determination_date": "2025-11-06 14:19:57",
                    "first_observation_date": "2008-10-23",
                    "last_observation_date": "2025-11-02",
                    "data_arc_in_days": 6219,
                    "observations_used": 85,
                    "orbit_uncertainty": "0",
                    "minimum_orbit_intersection": ".11267",
                    "jupiter_tisserand_invariant": "4.444",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".2786604392258704",
                    "semi_major_axis": "1.5276298227446",
                    "inclination": "4.407144040356345",
                    "ascending_node_longitude": "35.40046556461692",
                    "orbital_period": "689.6450433032905",
                    "perihelion_distance": "1.101939825364051",
                    "perihelion_argument": "14.81353705964231",
                    "aphelion_distance": "1.953319820125148",
                    "perihelion_time": "2460989.151040831957",
                    "mean_anomaly": "5.924243696330841",
                    "mean_motion": ".5220076668363438",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "AMO",
                        "orbit_class_description": "Near-Earth asteroid orbits similar to that of 1221 Amor",
                        "orbit_class_range": "1.017 AU < q (perihelion) < 1.3 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3883085?"
                },
                "id": "3883085",
                "neo_reference_id": "3883085",
                "name": "(2019 UH7)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3883085",
                "absolute_magnitude_h": 27.46,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0085616008,
                        "estimated_diameter_max": 0.0191443215
                    },
                    "meters": {
                        "estimated_diameter_min": 8.5616008472,
                        "estimated_diameter_max": 19.1443214906
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0053199305,
                        "estimated_diameter_max": 0.0118957262
                    },
                    "feet": {
                        "estimated_diameter_min": 28.0892425236,
                        "estimated_diameter_max": 62.8094557193
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-08",
                        "close_approach_date_full": "2025-Nov-08 16:42",
                        "epoch_date_close_approach": 1762620120000,
                        "relative_velocity": {
                            "kilometers_per_second": "5.7872736231",
                            "kilometers_per_hour": "20834.1850433108",
                            "miles_per_hour": "12945.5523676061"
                        },
                        "miss_distance": {
                            "astronomical": "0.0340505683",
                            "lunar": "13.2456710687",
                            "kilometers": "5093892.489969521",
                            "miles": "3165198.0210845498"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "7",
                    "orbit_determination_date": "2023-11-04 06:55:13",
                    "first_observation_date": "2019-10-25",
                    "last_observation_date": "2023-11-04",
                    "data_arc_in_days": 1471,
                    "observations_used": 41,
                    "orbit_uncertainty": "0",
                    "minimum_orbit_intersection": ".0244518",
                    "jupiter_tisserand_invariant": "4.290",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".3699744149395321",
                    "semi_major_axis": "1.591875600162535",
                    "inclination": "6.22328733252862",
                    "ascending_node_longitude": "32.2734339142877",
                    "orbital_period": "733.6047183486662",
                    "perihelion_distance": "1.002922356335884",
                    "perihelion_argument": "22.67021182012023",
                    "aphelion_distance": "2.180828843989185",
                    "perihelion_time": "2460996.665550469831",
                    "mean_anomaly": "1.881669782560914",
                    "mean_motion": ".4907274871546013",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54144917?"
                },
                "id": "54144917",
                "neo_reference_id": "54144917",
                "name": "(2021 JC4)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54144917",
                "absolute_magnitude_h": 26.18,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0154367182,
                        "estimated_diameter_max": 0.0345175513
                    },
                    "meters": {
                        "estimated_diameter_min": 15.4367182177,
                        "estimated_diameter_max": 34.5175512843
                    },
                    "miles": {
                        "estimated_diameter_min": 0.009591929,
                        "estimated_diameter_max": 0.0214482054
                    },
                    "feet": {
                        "estimated_diameter_min": 50.6454025974,
                        "estimated_diameter_max": 113.2465629557
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-08",
                        "close_approach_date_full": "2025-Nov-08 05:34",
                        "epoch_date_close_approach": 1762580040000,
                        "relative_velocity": {
                            "kilometers_per_second": "9.8744909333",
                            "kilometers_per_hour": "35548.1673599279",
                            "miles_per_hour": "22088.2487687285"
                        },
                        "miss_distance": {
                            "astronomical": "0.145352685",
                            "lunar": "56.542194465",
                            "kilometers": "21744452.07478095",
                            "miles": "13511375.98843911"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "5",
                    "orbit_determination_date": "2021-05-31 06:00:25",
                    "first_observation_date": "2021-05-10",
                    "last_observation_date": "2021-05-15",
                    "data_arc_in_days": 5,
                    "observations_used": 40,
                    "orbit_uncertainty": "7",
                    "minimum_orbit_intersection": ".00986928",
                    "jupiter_tisserand_invariant": "5.042",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".4577178645186837",
                    "semi_major_axis": "1.246961880360749",
                    "inclination": "2.615438192642995",
                    "ascending_node_longitude": "220.721858032156",
                    "orbital_period": "508.6021512733527",
                    "perihelion_distance": ".6762051513458247",
                    "perihelion_argument": "105.7291188297294",
                    "aphelion_distance": "1.817718609375674",
                    "perihelion_time": "2460934.293502036650",
                    "mean_anomaly": "46.86244288808793",
                    "mean_motion": ".7078224091240912",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54146681?"
                },
                "id": "54146681",
                "neo_reference_id": "54146681",
                "name": "(2021 KW)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54146681",
                "absolute_magnitude_h": 27.78,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0073884779,
                        "estimated_diameter_max": 0.0165211388
                    },
                    "meters": {
                        "estimated_diameter_min": 7.3884778657,
                        "estimated_diameter_max": 16.521138758
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0045909859,
                        "estimated_diameter_max": 0.0102657565
                    },
                    "feet": {
                        "estimated_diameter_min": 24.2404137209,
                        "estimated_diameter_max": 54.2032128827
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-08",
                        "close_approach_date_full": "2025-Nov-08 17:48",
                        "epoch_date_close_approach": 1762624080000,
                        "relative_velocity": {
                            "kilometers_per_second": "22.515304032",
                            "kilometers_per_hour": "81055.0945152702",
                            "miles_per_hour": "50364.4835892244"
                        },
                        "miss_distance": {
                            "astronomical": "0.2379172473",
                            "lunar": "92.5498091997",
                            "kilometers": "35591913.432343251",
                            "miles": "22115789.4840728238"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "1",
                    "orbit_determination_date": "2021-05-19 17:42:03",
                    "first_observation_date": "2021-05-17",
                    "last_observation_date": "2021-05-19",
                    "data_arc_in_days": 2,
                    "observations_used": 22,
                    "orbit_uncertainty": "8",
                    "minimum_orbit_intersection": ".00373971",
                    "jupiter_tisserand_invariant": "4.095",
                    "epoch_osculation": "2459352.5",
                    "eccentricity": ".5523345202621396",
                    "semi_major_axis": "1.648193613740318",
                    "inclination": ".3739940530040262",
                    "ascending_node_longitude": "96.58780654908915",
                    "orbital_period": "772.8776835351206",
                    "perihelion_distance": ".7378393847959371",
                    "perihelion_argument": "221.3606034753813",
                    "aphelion_distance": "2.558547842684698",
                    "perihelion_time": "2459406.674255860641",
                    "mean_anomaly": "334.7660819748012",
                    "mean_motion": ".46579168692434",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54219286?"
                },
                "id": "54219286",
                "neo_reference_id": "54219286",
                "name": "(2021 VQ10)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54219286",
                "absolute_magnitude_h": 27.16,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.009830033,
                        "estimated_diameter_max": 0.0219806221
                    },
                    "meters": {
                        "estimated_diameter_min": 9.8300330186,
                        "estimated_diameter_max": 21.9806220506
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0061080974,
                        "estimated_diameter_max": 0.0136581211
                    },
                    "feet": {
                        "estimated_diameter_min": 32.2507655286,
                        "estimated_diameter_max": 72.1149040484
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-08",
                        "close_approach_date_full": "2025-Nov-08 01:19",
                        "epoch_date_close_approach": 1762564740000,
                        "relative_velocity": {
                            "kilometers_per_second": "14.9542555697",
                            "kilometers_per_hour": "53835.3200510341",
                            "miles_per_hour": "33451.1742839328"
                        },
                        "miss_distance": {
                            "astronomical": "0.023140917",
                            "lunar": "9.001816713",
                            "kilometers": "3461831.89304679",
                            "miles": "2151082.591314102"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "2",
                    "orbit_determination_date": "2022-11-07 05:22:41",
                    "first_observation_date": "2021-11-09",
                    "last_observation_date": "2021-11-12",
                    "data_arc_in_days": 3,
                    "observations_used": 13,
                    "orbit_uncertainty": "7",
                    "minimum_orbit_intersection": ".000834324",
                    "jupiter_tisserand_invariant": "5.146",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".4308302687830703",
                    "semi_major_axis": "1.213746465153158",
                    "inclination": "9.921037786417262",
                    "ascending_node_longitude": "44.64926210338634",
                    "orbital_period": "488.416575225614",
                    "perihelion_distance": ".6908277493367218",
                    "perihelion_argument": "269.3159821805508",
                    "aphelion_distance": "1.736665180969595",
                    "perihelion_time": "2460930.074534523272",
                    "mean_anomaly": "51.90890083922839",
                    "mean_motion": ".7370757223661081",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": true,
                "sentry_data": "http://api.nasa.gov/neo/rest/v1/neo/sentry/54219286?"
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54225722?"
                },
                "id": "54225722",
                "neo_reference_id": "54225722",
                "name": "(2021 XC)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54225722",
                "absolute_magnitude_h": 26.29,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0146742183,
                        "estimated_diameter_max": 0.0328125497
                    },
                    "meters": {
                        "estimated_diameter_min": 14.6742183361,
                        "estimated_diameter_max": 32.8125497162
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0091181337,
                        "estimated_diameter_max": 0.0203887668
                    },
                    "feet": {
                        "estimated_diameter_min": 48.1437624858,
                        "estimated_diameter_max": 107.6527256107
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-08",
                        "close_approach_date_full": "2025-Nov-08 11:18",
                        "epoch_date_close_approach": 1762600680000,
                        "relative_velocity": {
                            "kilometers_per_second": "18.8717633924",
                            "kilometers_per_hour": "67938.34821255",
                            "miles_per_hour": "42214.2475324036"
                        },
                        "miss_distance": {
                            "astronomical": "0.441003093",
                            "lunar": "171.550203177",
                            "kilometers": "65973123.37621191",
                            "miles": "40993797.958307958"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "6",
                    "orbit_determination_date": "2021-12-06 04:52:28",
                    "first_observation_date": "2021-12-01",
                    "last_observation_date": "2021-12-05",
                    "data_arc_in_days": 4,
                    "observations_used": 32,
                    "orbit_uncertainty": "7",
                    "minimum_orbit_intersection": ".000318412",
                    "jupiter_tisserand_invariant": "5.269",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".2282161645120475",
                    "semi_major_axis": "1.196688205439664",
                    "inclination": "9.502597377376143",
                    "ascending_node_longitude": "254.5262753720826",
                    "orbital_period": "478.1563667122878",
                    "perihelion_distance": ".9235846130774185",
                    "perihelion_argument": "228.676367589657",
                    "aphelion_distance": "1.469791797801909",
                    "perihelion_time": "2461032.078384745378",
                    "mean_anomaly": "336.2248935709005",
                    "mean_motion": ".7528917840732552",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54281071?"
                },
                "id": "54281071",
                "neo_reference_id": "54281071",
                "name": "(2022 KG6)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54281071",
                "absolute_magnitude_h": 26.11,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0159424468,
                        "estimated_diameter_max": 0.0356483948
                    },
                    "meters": {
                        "estimated_diameter_min": 15.9424468069,
                        "estimated_diameter_max": 35.6483947878
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0099061741,
                        "estimated_diameter_max": 0.0221508787
                    },
                    "feet": {
                        "estimated_diameter_min": 52.3046171819,
                        "estimated_diameter_max": 116.9566795557
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-08",
                        "close_approach_date_full": "2025-Nov-08 05:57",
                        "epoch_date_close_approach": 1762581420000,
                        "relative_velocity": {
                            "kilometers_per_second": "8.432406206",
                            "kilometers_per_hour": "30356.6623416711",
                            "miles_per_hour": "18862.4494422456"
                        },
                        "miss_distance": {
                            "astronomical": "0.4722522968",
                            "lunar": "183.7061434552",
                            "kilometers": "70647937.703887816",
                            "miles": "43898592.8843952208"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "6",
                    "orbit_determination_date": "2022-06-21 05:57:35",
                    "first_observation_date": "2022-05-23",
                    "last_observation_date": "2022-06-20",
                    "data_arc_in_days": 28,
                    "observations_used": 44,
                    "orbit_uncertainty": "7",
                    "minimum_orbit_intersection": ".041281",
                    "jupiter_tisserand_invariant": "5.091",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".1623965154311673",
                    "semi_major_axis": "1.259264835909637",
                    "inclination": "9.072290842796562",
                    "ascending_node_longitude": "244.7705311301589",
                    "orbital_period": "516.1477531054948",
                    "perihelion_distance": "1.054764614552911",
                    "perihelion_argument": "352.62826014",
                    "aphelion_distance": "1.463765057266363",
                    "perihelion_time": "2460750.827795603446",
                    "mean_anomaly": "174.1400462212004",
                    "mean_motion": ".6974747014473975",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "AMO",
                        "orbit_class_description": "Near-Earth asteroid orbits similar to that of 1221 Amor",
                        "orbit_class_range": "1.017 AU < q (perihelion) < 1.3 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54338715?"
                },
                "id": "54338715",
                "neo_reference_id": "54338715",
                "name": "(2023 AX)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54338715",
                "absolute_magnitude_h": 28.07,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0064647983,
                        "estimated_diameter_max": 0.0144557284
                    },
                    "meters": {
                        "estimated_diameter_min": 6.4647982561,
                        "estimated_diameter_max": 14.4557283615
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0040170382,
                        "estimated_diameter_max": 0.0089823704
                    },
                    "feet": {
                        "estimated_diameter_min": 21.2099687106,
                        "estimated_diameter_max": 47.4269318376
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-08",
                        "close_approach_date_full": "2025-Nov-08 23:21",
                        "epoch_date_close_approach": 1762644060000,
                        "relative_velocity": {
                            "kilometers_per_second": "15.5826661204",
                            "kilometers_per_hour": "56097.5980335552",
                            "miles_per_hour": "34856.8658447943"
                        },
                        "miss_distance": {
                            "astronomical": "0.4077234686",
                            "lunar": "158.6044292854",
                            "kilometers": "60994562.451571882",
                            "miles": "37900263.6488286916"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "4",
                    "orbit_determination_date": "2023-01-18 04:48:51",
                    "first_observation_date": "2023-01-13",
                    "last_observation_date": "2023-01-17",
                    "data_arc_in_days": 4,
                    "observations_used": 31,
                    "orbit_uncertainty": "7",
                    "minimum_orbit_intersection": ".00705975",
                    "jupiter_tisserand_invariant": "5.002",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".2331454030659858",
                    "semi_major_axis": "1.289181900707074",
                    "inclination": "4.124367546827794",
                    "ascending_node_longitude": "113.0668454187154",
                    "orbital_period": "534.6501910744289",
                    "perihelion_distance": ".9886150668413491",
                    "perihelion_argument": "350.0400952349976",
                    "aphelion_distance": "1.589748734572798",
                    "perihelion_time": "2461019.276621014875",
                    "mean_anomaly": "347.3569977562879",
                    "mean_motion": ".6733374569202842",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54533099?"
                },
                "id": "54533099",
                "neo_reference_id": "54533099",
                "name": "(2025 KU1)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54533099",
                "absolute_magnitude_h": 26.23,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0150853356,
                        "estimated_diameter_max": 0.0337318359
                    },
                    "meters": {
                        "estimated_diameter_min": 15.0853356118,
                        "estimated_diameter_max": 33.7318358913
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0093735901,
                        "estimated_diameter_max": 0.0209599846
                    },
                    "feet": {
                        "estimated_diameter_min": 49.4925724885,
                        "estimated_diameter_max": 110.6687564656
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-08",
                        "close_approach_date_full": "2025-Nov-08 02:43",
                        "epoch_date_close_approach": 1762569780000,
                        "relative_velocity": {
                            "kilometers_per_second": "3.4857247249",
                            "kilometers_per_hour": "12548.6090096379",
                            "miles_per_hour": "7797.2176371275"
                        },
                        "miss_distance": {
                            "astronomical": "0.08860466",
                            "lunar": "34.46721274",
                            "kilometers": "13255068.4080742",
                            "miles": "8236317.58565596"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "1",
                    "orbit_determination_date": "2025-05-23 20:42:02",
                    "first_observation_date": "2025-05-22",
                    "last_observation_date": "2025-05-24",
                    "data_arc_in_days": 2,
                    "observations_used": 12,
                    "orbit_uncertainty": "8",
                    "minimum_orbit_intersection": ".036633",
                    "jupiter_tisserand_invariant": "5.745",
                    "epoch_osculation": "2460818.5",
                    "eccentricity": ".08137334198644712",
                    "semi_major_axis": "1.074093365234891",
                    "inclination": "5.986465309075438",
                    "ascending_node_longitude": "235.9579077056756",
                    "orbital_period": "406.5944795008097",
                    "perihelion_distance": ".9866907985002579",
                    "perihelion_argument": "85.42816690919983",
                    "aphelion_distance": "1.161495931969523",
                    "perihelion_time": "2460899.862070063952",
                    "mean_anomaly": "287.9617734628775",
                    "mean_motion": ".8854030690283465",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54554639?"
                },
                "id": "54554639",
                "neo_reference_id": "54554639",
                "name": "(2025 UM6)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54554639",
                "absolute_magnitude_h": 25.31,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0230438467,
                        "estimated_diameter_max": 0.0515276076
                    },
                    "meters": {
                        "estimated_diameter_min": 23.0438466577,
                        "estimated_diameter_max": 51.5276075896
                    },
                    "miles": {
                        "estimated_diameter_min": 0.014318778,
                        "estimated_diameter_max": 0.0320177611
                    },
                    "feet": {
                        "estimated_diameter_min": 75.6031738683,
                        "estimated_diameter_max": 169.0538360842
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-08",
                        "close_approach_date_full": "2025-Nov-08 05:27",
                        "epoch_date_close_approach": 1762579620000,
                        "relative_velocity": {
                            "kilometers_per_second": "6.1020014914",
                            "kilometers_per_hour": "21967.205369189",
                            "miles_per_hour": "13649.5671362052"
                        },
                        "miss_distance": {
                            "astronomical": "0.1652376233",
                            "lunar": "64.2774354637",
                            "kilometers": "24719196.489542371",
                            "miles": "15359796.4553758798"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "2",
                    "orbit_determination_date": "2025-11-11 05:44:21",
                    "first_observation_date": "2025-10-19",
                    "last_observation_date": "2025-11-11",
                    "data_arc_in_days": 23,
                    "observations_used": 16,
                    "orbit_uncertainty": "7",
                    "minimum_orbit_intersection": ".0418249",
                    "jupiter_tisserand_invariant": "5.591",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".2174667485525253",
                    "semi_major_axis": "1.10620097382826",
                    "inclination": "9.579169862589049",
                    "ascending_node_longitude": "206.5297062942847",
                    "orbital_period": "424.9613975117137",
                    "perihelion_distance": ".8656390448041913",
                    "perihelion_argument": "301.0841328986514",
                    "aphelion_distance": "1.346762902852329",
                    "perihelion_time": "2461084.113487707385",
                    "mean_anomaly": "289.1680238466157",
                    "mean_motion": ".8471357683495874",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54555754?"
                },
                "id": "54555754",
                "neo_reference_id": "54555754",
                "name": "(2025 UL17)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54555754",
                "absolute_magnitude_h": 24.994,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0266535448,
                        "estimated_diameter_max": 0.059599138
                    },
                    "meters": {
                        "estimated_diameter_min": 26.6535448132,
                        "estimated_diameter_max": 59.5991380438
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0165617398,
                        "estimated_diameter_max": 0.037033176
                    },
                    "feet": {
                        "estimated_diameter_min": 87.4460159651,
                        "estimated_diameter_max": 195.5352360595
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-08",
                        "close_approach_date_full": "2025-Nov-08 23:20",
                        "epoch_date_close_approach": 1762644000000,
                        "relative_velocity": {
                            "kilometers_per_second": "8.9909757113",
                            "kilometers_per_hour": "32367.5125605869",
                            "miles_per_hour": "20111.9135685491"
                        },
                        "miss_distance": {
                            "astronomical": "0.0150813786",
                            "lunar": "5.8666562754",
                            "kilometers": "2256142.115223582",
                            "miles": "1401901.7033541516"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "1",
                    "orbit_determination_date": "2025-11-02 03:12:02",
                    "first_observation_date": "2025-10-31",
                    "last_observation_date": "2025-11-02",
                    "data_arc_in_days": 2,
                    "observations_used": 18,
                    "orbit_uncertainty": "6",
                    "minimum_orbit_intersection": ".0124743",
                    "jupiter_tisserand_invariant": "6.412",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".2525133816887679",
                    "semi_major_axis": ".9278506686892707",
                    "inclination": "10.41902692717404",
                    "ascending_node_longitude": "49.71660560593453",
                    "orbital_period": "326.4491592789354",
                    "perihelion_distance": ".6935559586363583",
                    "perihelion_argument": "114.243347429806",
                    "aphelion_distance": "1.162145378742183",
                    "perihelion_time": "2461069.314903441579",
                    "mean_anomaly": "284.1126388755663",
                    "mean_motion": "1.10277508692371",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "ATE",
                        "orbit_class_description": "Near-Earth asteroid orbits similar to that of 2062 Aten",
                        "orbit_class_range": "a (semi-major axis) < 1.0 AU; q (perihelion) > 0.983 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54560222?"
                },
                "id": "54560222",
                "neo_reference_id": "54560222",
                "name": "(2025 VN)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54560222",
                "absolute_magnitude_h": 27.931,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0068921541,
                        "estimated_diameter_max": 0.015411325
                    },
                    "meters": {
                        "estimated_diameter_min": 6.8921540593,
                        "estimated_diameter_max": 15.4113249881
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0042825847,
                        "estimated_diameter_max": 0.0095761504
                    },
                    "feet": {
                        "estimated_diameter_min": 22.612054724,
                        "estimated_diameter_max": 50.5620914738
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-08",
                        "close_approach_date_full": "2025-Nov-08 00:29",
                        "epoch_date_close_approach": 1762561740000,
                        "relative_velocity": {
                            "kilometers_per_second": "11.8699191939",
                            "kilometers_per_hour": "42731.7090982157",
                            "miles_per_hour": "26551.8222449441"
                        },
                        "miss_distance": {
                            "astronomical": "0.0002412618",
                            "lunar": "0.0938508402",
                            "kilometers": "36092.251392366",
                            "miles": "22426.6850760108"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "4",
                    "orbit_determination_date": "2025-11-11 08:27:34",
                    "first_observation_date": "2025-11-07",
                    "last_observation_date": "2025-11-07",
                    "data_arc_in_days": null,
                    "observations_used": 46,
                    "orbit_uncertainty": "5",
                    "minimum_orbit_intersection": "7.62204E-5",
                    "jupiter_tisserand_invariant": "6.049",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".299135406084503",
                    "semi_major_axis": ".9937987213426345",
                    "inclination": "12.91939749763917",
                    "ascending_node_longitude": "45.47225447538112",
                    "orbital_period": "361.8645814220505",
                    "perihelion_distance": ".6965183372675458",
                    "perihelion_argument": "106.890069814929",
                    "aphelion_distance": "1.291079105417723",
                    "perihelion_time": "2461060.178138029188",
                    "mean_anomaly": "300.6293658083924",
                    "mean_motion": ".9948472950441209",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "ATE",
                        "orbit_class_description": "Near-Earth asteroid orbits similar to that of 2062 Aten",
                        "orbit_class_range": "a (semi-major axis) < 1.0 AU; q (perihelion) > 0.983 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54560905?"
                },
                "id": "54560905",
                "neo_reference_id": "54560905",
                "name": "(2025 VQ)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54560905",
                "absolute_magnitude_h": 25.735,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0189476335,
                        "estimated_diameter_max": 0.0423681966
                    },
                    "meters": {
                        "estimated_diameter_min": 18.9476335408,
                        "estimated_diameter_max": 42.3681966099
                    },
                    "miles": {
                        "estimated_diameter_min": 0.01177351,
                        "estimated_diameter_max": 0.0263263687
                    },
                    "feet": {
                        "estimated_diameter_min": 62.1641540259,
                        "estimated_diameter_max": 139.0032741656
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-08",
                        "close_approach_date_full": "2025-Nov-08 07:51",
                        "epoch_date_close_approach": 1762588260000,
                        "relative_velocity": {
                            "kilometers_per_second": "12.5789306214",
                            "kilometers_per_hour": "45284.1502370605",
                            "miles_per_hour": "28137.8099070224"
                        },
                        "miss_distance": {
                            "astronomical": "0.0124740538",
                            "lunar": "4.8524069282",
                            "kilometers": "1866091.878745406",
                            "miles": "1159535.7250663628"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "1",
                    "orbit_determination_date": "2025-11-08 18:42:02",
                    "first_observation_date": "2025-11-07",
                    "last_observation_date": "2025-11-08",
                    "data_arc_in_days": 1,
                    "observations_used": 33,
                    "orbit_uncertainty": "8",
                    "minimum_orbit_intersection": ".00761728",
                    "jupiter_tisserand_invariant": "3.158",
                    "epoch_osculation": "2460987.5",
                    "eccentricity": ".6018111265194214",
                    "semi_major_axis": "2.477523205346368",
                    "inclination": "16.30931601937047",
                    "ascending_node_longitude": "46.74991288455423",
                    "orbital_period": "1424.377232659837",
                    "perihelion_distance": ".9865221741588626",
                    "perihelion_argument": "14.49159458150063",
                    "aphelion_distance": "3.968524236533873",
                    "perihelion_time": "2460999.664492571664",
                    "mean_anomaly": "356.9255213960269",
                    "mean_motion": ".252742034726115",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54561038?"
                },
                "id": "54561038",
                "neo_reference_id": "54561038",
                "name": "(2025 VS)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54561038",
                "absolute_magnitude_h": 26.214,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.015196899,
                        "estimated_diameter_max": 0.0339812992
                    },
                    "meters": {
                        "estimated_diameter_min": 15.1968989821,
                        "estimated_diameter_max": 33.9812991713
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0094429123,
                        "estimated_diameter_max": 0.0211149938
                    },
                    "feet": {
                        "estimated_diameter_min": 49.8585940566,
                        "estimated_diameter_max": 111.4872055731
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-08",
                        "close_approach_date_full": "2025-Nov-08 05:33",
                        "epoch_date_close_approach": 1762579980000,
                        "relative_velocity": {
                            "kilometers_per_second": "11.1993445653",
                            "kilometers_per_hour": "40317.6404349439",
                            "miles_per_hour": "25051.813858035"
                        },
                        "miss_distance": {
                            "astronomical": "0.0103300465",
                            "lunar": "4.0183880885",
                            "kilometers": "1545352.953400955",
                            "miles": "960237.798424979"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "6",
                    "orbit_determination_date": "2025-11-14 05:39:13",
                    "first_observation_date": "2025-11-08",
                    "last_observation_date": "2025-11-13",
                    "data_arc_in_days": 5,
                    "observations_used": 64,
                    "orbit_uncertainty": "7",
                    "minimum_orbit_intersection": ".00761615",
                    "jupiter_tisserand_invariant": "3.974",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".4918638642693038",
                    "semi_major_axis": "1.753878374851232",
                    "inclination": "4.792233322512489",
                    "ascending_node_longitude": "229.8635891880205",
                    "orbital_period": "848.3940945510437",
                    "perihelion_distance": ".8912089799385382",
                    "perihelion_argument": "128.4804649950204",
                    "aphelion_distance": "2.616547769763925",
                    "perihelion_time": "2460952.305627896092",
                    "mean_anomaly": "20.45037096420169",
                    "mean_motion": ".424331100737454",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54561040?"
                },
                "id": "54561040",
                "neo_reference_id": "54561040",
                "name": "(2025 VU)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54561040",
                "absolute_magnitude_h": 26.557,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0129764225,
                        "estimated_diameter_max": 0.0290161628
                    },
                    "meters": {
                        "estimated_diameter_min": 12.9764224789,
                        "estimated_diameter_max": 29.0161627675
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0080631726,
                        "estimated_diameter_max": 0.0180298021
                    },
                    "feet": {
                        "estimated_diameter_min": 42.5735659256,
                        "estimated_diameter_max": 95.1973874543
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-08",
                        "close_approach_date_full": "2025-Nov-08 12:37",
                        "epoch_date_close_approach": 1762605420000,
                        "relative_velocity": {
                            "kilometers_per_second": "6.3193267762",
                            "kilometers_per_hour": "22749.5763941772",
                            "miles_per_hour": "14135.702065593"
                        },
                        "miss_distance": {
                            "astronomical": "0.0180415227",
                            "lunar": "7.0181523303",
                            "kilometers": "2698973.367476649",
                            "miles": "1677064.2840457962"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "5",
                    "orbit_determination_date": "2025-11-14 05:39:13",
                    "first_observation_date": "2025-11-08",
                    "last_observation_date": "2025-11-13",
                    "data_arc_in_days": 5,
                    "observations_used": 73,
                    "orbit_uncertainty": "6",
                    "minimum_orbit_intersection": ".0180117",
                    "jupiter_tisserand_invariant": "5.495",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".1452963292215509",
                    "semi_major_axis": "1.13487738408918",
                    "inclination": "9.863955633152807",
                    "ascending_node_longitude": "49.15635062169415",
                    "orbital_period": "441.5926528383538",
                    "perihelion_distance": ".9699838660644657",
                    "perihelion_argument": "312.6086884398881",
                    "aphelion_distance": "1.299770902113894",
                    "perihelion_time": "2460946.999871219325",
                    "mean_anomaly": "43.6149610670565",
                    "mean_motion": ".8152309547862405",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54561042?"
                },
                "id": "54561042",
                "neo_reference_id": "54561042",
                "name": "(2025 VY)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54561042",
                "absolute_magnitude_h": 27.326,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0091065731,
                        "estimated_diameter_max": 0.0203629164
                    },
                    "meters": {
                        "estimated_diameter_min": 9.1065730687,
                        "estimated_diameter_max": 20.3629164238
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0056585604,
                        "estimated_diameter_max": 0.0126529257
                    },
                    "feet": {
                        "estimated_diameter_min": 29.8772091868,
                        "estimated_diameter_max": 66.8074707197
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-08",
                        "close_approach_date_full": "2025-Nov-08 09:32",
                        "epoch_date_close_approach": 1762594320000,
                        "relative_velocity": {
                            "kilometers_per_second": "13.7994650481",
                            "kilometers_per_hour": "49678.0741730801",
                            "miles_per_hour": "30868.0233660452"
                        },
                        "miss_distance": {
                            "astronomical": "0.0139372765",
                            "lunar": "5.4216005585",
                            "kilometers": "2084986.878001055",
                            "miles": "1295550.770502359"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "5",
                    "orbit_determination_date": "2025-11-14 05:39:13",
                    "first_observation_date": "2025-11-09",
                    "last_observation_date": "2025-11-14",
                    "data_arc_in_days": 5,
                    "observations_used": 39,
                    "orbit_uncertainty": "8",
                    "minimum_orbit_intersection": ".00282237",
                    "jupiter_tisserand_invariant": "2.936",
                    "epoch_osculation": "2460989.5",
                    "eccentricity": ".6796001117501106",
                    "semi_major_axis": "2.789657166485962",
                    "inclination": "4.730855039434124",
                    "ascending_node_longitude": "225.9635619391039",
                    "orbital_period": "1701.863319980045",
                    "perihelion_distance": ".8938058443976051",
                    "perihelion_argument": "137.2004027690291",
                    "aphelion_distance": "4.685508488574318",
                    "perihelion_time": "2460957.939398682406",
                    "mean_anomaly": "6.676103974358566",
                    "mean_motion": ".2115328509484658",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54561136?"
                },
                "id": "54561136",
                "neo_reference_id": "54561136",
                "name": "(2025 VB1)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54561136",
                "absolute_magnitude_h": 26.354,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0142480351,
                        "estimated_diameter_max": 0.031859575
                    },
                    "meters": {
                        "estimated_diameter_min": 14.2480351088,
                        "estimated_diameter_max": 31.859575049
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0088533158,
                        "estimated_diameter_max": 0.019796616
                    },
                    "feet": {
                        "estimated_diameter_min": 46.7455235062,
                        "estimated_diameter_max": 104.5261682037
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-08",
                        "close_approach_date_full": "2025-Nov-08 22:36",
                        "epoch_date_close_approach": 1762641360000,
                        "relative_velocity": {
                            "kilometers_per_second": "19.9712716562",
                            "kilometers_per_hour": "71896.5779621771",
                            "miles_per_hour": "44673.737567665"
                        },
                        "miss_distance": {
                            "astronomical": "0.0058545133",
                            "lunar": "2.2774056737",
                            "kilometers": "875822.719566671",
                            "miles": "544211.0025392198"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "3",
                    "orbit_determination_date": "2025-11-14 05:39:13",
                    "first_observation_date": "2025-11-10",
                    "last_observation_date": "2025-11-13",
                    "data_arc_in_days": 3,
                    "observations_used": 36,
                    "orbit_uncertainty": "8",
                    "minimum_orbit_intersection": ".00491784",
                    "jupiter_tisserand_invariant": "4.233",
                    "epoch_osculation": "2460990.5",
                    "eccentricity": ".6304493886172443",
                    "semi_major_axis": "1.534805194140009",
                    "inclination": ".4347282281033124",
                    "ascending_node_longitude": "266.6248644339748",
                    "orbital_period": "694.5097024372203",
                    "perihelion_distance": ".5671881978478694",
                    "perihelion_argument": "43.57279359800623",
                    "aphelion_distance": "2.502422190432149",
                    "perihelion_time": "2460938.470016118372",
                    "mean_anomaly": "26.96980925054713",
                    "mean_motion": ".5183512897468008",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54561378?"
                },
                "id": "54561378",
                "neo_reference_id": "54561378",
                "name": "(2025 VB2)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54561378",
                "absolute_magnitude_h": 27.774,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0074089212,
                        "estimated_diameter_max": 0.0165668515
                    },
                    "meters": {
                        "estimated_diameter_min": 7.408921215,
                        "estimated_diameter_max": 16.5668514767
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0046036888,
                        "estimated_diameter_max": 0.0102941611
                    },
                    "feet": {
                        "estimated_diameter_min": 24.3074850791,
                        "estimated_diameter_max": 54.3531889989
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-08",
                        "close_approach_date_full": "2025-Nov-08 02:04",
                        "epoch_date_close_approach": 1762567440000,
                        "relative_velocity": {
                            "kilometers_per_second": "7.4655755032",
                            "kilometers_per_hour": "26876.0718114272",
                            "miles_per_hour": "16699.7458430504"
                        },
                        "miss_distance": {
                            "astronomical": "0.0091107982",
                            "lunar": "3.5441004998",
                            "kilometers": "1362956.004719834",
                            "miles": "846901.5899843492"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "2",
                    "orbit_determination_date": "2025-11-12 06:10:03",
                    "first_observation_date": "2025-11-10",
                    "last_observation_date": "2025-11-12",
                    "data_arc_in_days": 2,
                    "observations_used": 29,
                    "orbit_uncertainty": "6",
                    "minimum_orbit_intersection": ".00577092",
                    "jupiter_tisserand_invariant": "5.859",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".2353998913525351",
                    "semi_major_axis": "1.04272710408672",
                    "inclination": "3.036849127156203",
                    "ascending_node_longitude": "52.11427970799915",
                    "orbital_period": "388.9147554571775",
                    "perihelion_distance": ".7972692570743627",
                    "perihelion_argument": "262.0445858916253",
                    "aphelion_distance": "1.288184951099078",
                    "perihelion_time": "2460917.423439358329",
                    "mean_anomaly": "76.90004406195514",
                    "mean_motion": ".9256527168191713",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            }
        ],
        "2025-11-09": [
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3652983?"
                },
                "id": "3652983",
                "neo_reference_id": "3652983",
                "name": "(2013 UD1)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3652983",
                "absolute_magnitude_h": 24.7,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0305179233,
                        "estimated_diameter_max": 0.0682401509
                    },
                    "meters": {
                        "estimated_diameter_min": 30.5179232594,
                        "estimated_diameter_max": 68.2401509401
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0189629525,
                        "estimated_diameter_max": 0.0424024508
                    },
                    "feet": {
                        "estimated_diameter_min": 100.1244233463,
                        "estimated_diameter_max": 223.8850168104
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-09",
                        "close_approach_date_full": "2025-Nov-09 11:32",
                        "epoch_date_close_approach": 1762687920000,
                        "relative_velocity": {
                            "kilometers_per_second": "21.2400110534",
                            "kilometers_per_hour": "76464.039792343",
                            "miles_per_hour": "47511.7807254144"
                        },
                        "miss_distance": {
                            "astronomical": "0.4203327619",
                            "lunar": "163.5094443791",
                            "kilometers": "62880885.871457153",
                            "miles": "39072370.6706205914"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "12",
                    "orbit_determination_date": "2021-04-15 08:52:36",
                    "first_observation_date": "2013-10-22",
                    "last_observation_date": "2013-11-03",
                    "data_arc_in_days": 12,
                    "observations_used": 58,
                    "orbit_uncertainty": "7",
                    "minimum_orbit_intersection": ".0187292",
                    "jupiter_tisserand_invariant": "4.901",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".3273421679235008",
                    "semi_major_axis": "1.315487441666144",
                    "inclination": "5.77758067728048",
                    "ascending_node_longitude": "213.0051943716201",
                    "orbital_period": "551.0975579060442",
                    "perihelion_distance": ".8848729306350087",
                    "perihelion_argument": "111.3341013914258",
                    "aphelion_distance": "1.74610195269728",
                    "perihelion_time": "2460942.428138916466",
                    "mean_anomaly": "37.93497120456572",
                    "mean_motion": ".6532418713083389",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3736207?"
                },
                "id": "3736207",
                "neo_reference_id": "3736207",
                "name": "(2015 XX128)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3736207",
                "absolute_magnitude_h": 26.05,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0163890951,
                        "estimated_diameter_max": 0.0366471308
                    },
                    "meters": {
                        "estimated_diameter_min": 16.3890951495,
                        "estimated_diameter_max": 36.6471308439
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0101837084,
                        "estimated_diameter_max": 0.0227714643
                    },
                    "feet": {
                        "estimated_diameter_min": 53.7699989302,
                        "estimated_diameter_max": 120.233372758
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-09",
                        "close_approach_date_full": "2025-Nov-09 02:18",
                        "epoch_date_close_approach": 1762654680000,
                        "relative_velocity": {
                            "kilometers_per_second": "7.4682141339",
                            "kilometers_per_hour": "26885.5708822041",
                            "miles_per_hour": "16705.6481962229"
                        },
                        "miss_distance": {
                            "astronomical": "0.125663944",
                            "lunar": "48.883274216",
                            "kilometers": "18799058.35819928",
                            "miles": "11681193.199658864"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "12",
                    "orbit_determination_date": "2024-01-13 05:20:57",
                    "first_observation_date": "2015-12-05",
                    "last_observation_date": "2016-02-13",
                    "data_arc_in_days": 70,
                    "observations_used": 58,
                    "orbit_uncertainty": "4",
                    "minimum_orbit_intersection": ".00216783",
                    "jupiter_tisserand_invariant": "5.069",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".227961416767011",
                    "semi_major_axis": "1.265995622182571",
                    "inclination": "3.131340310468663",
                    "ascending_node_longitude": "77.42948454993235",
                    "orbital_period": "520.2915021829583",
                    "perihelion_distance": ".9773974665289984",
                    "perihelion_argument": "13.31254297724168",
                    "aphelion_distance": "1.554593777836143",
                    "perihelion_time": "2461022.452865756238",
                    "mean_anomaly": "344.8103771845451",
                    "mean_motion": ".6919198151220382",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3761647?"
                },
                "id": "3761647",
                "neo_reference_id": "3761647",
                "name": "(2016 UY35)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3761647",
                "absolute_magnitude_h": 24.7,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0305179233,
                        "estimated_diameter_max": 0.0682401509
                    },
                    "meters": {
                        "estimated_diameter_min": 30.5179232594,
                        "estimated_diameter_max": 68.2401509401
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0189629525,
                        "estimated_diameter_max": 0.0424024508
                    },
                    "feet": {
                        "estimated_diameter_min": 100.1244233463,
                        "estimated_diameter_max": 223.8850168104
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-09",
                        "close_approach_date_full": "2025-Nov-09 03:43",
                        "epoch_date_close_approach": 1762659780000,
                        "relative_velocity": {
                            "kilometers_per_second": "9.4188683384",
                            "kilometers_per_hour": "33907.9260183411",
                            "miles_per_hour": "21069.0665862298"
                        },
                        "miss_distance": {
                            "astronomical": "0.1735513276",
                            "lunar": "67.5114664364",
                            "kilometers": "25962908.944632212",
                            "miles": "16132603.5394280456"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "8",
                    "orbit_determination_date": "2021-04-15 17:58:56",
                    "first_observation_date": "2016-10-23",
                    "last_observation_date": "2016-11-06",
                    "data_arc_in_days": 14,
                    "observations_used": 64,
                    "orbit_uncertainty": "6",
                    "minimum_orbit_intersection": ".0739003",
                    "jupiter_tisserand_invariant": "6.389",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".1793661544052415",
                    "semi_major_axis": ".9299198402326716",
                    "inclination": "17.4924668391948",
                    "ascending_node_longitude": "215.1418772696029",
                    "orbital_period": "327.5417743707242",
                    "perihelion_distance": ".7631236945850007",
                    "perihelion_argument": "25.86838617532098",
                    "aphelion_distance": "1.096715985880343",
                    "perihelion_time": "2461162.752759644385",
                    "mean_anomaly": "181.6685685842726",
                    "mean_motion": "1.099096445611051",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "ATE",
                        "orbit_class_description": "Near-Earth asteroid orbits similar to that of 2062 Aten",
                        "orbit_class_range": "a (semi-major axis) < 1.0 AU; q (perihelion) > 0.983 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3781985?"
                },
                "id": "3781985",
                "neo_reference_id": "3781985",
                "name": "(2017 SZ19)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3781985",
                "absolute_magnitude_h": 27.6,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0080270317,
                        "estimated_diameter_max": 0.0179489885
                    },
                    "meters": {
                        "estimated_diameter_min": 8.0270316728,
                        "estimated_diameter_max": 17.948988478
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0049877647,
                        "estimated_diameter_max": 0.0111529809
                    },
                    "feet": {
                        "estimated_diameter_min": 26.3354065935,
                        "estimated_diameter_max": 58.8877593581
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-09",
                        "close_approach_date_full": "2025-Nov-09 07:49",
                        "epoch_date_close_approach": 1762674540000,
                        "relative_velocity": {
                            "kilometers_per_second": "10.126610369",
                            "kilometers_per_hour": "36455.7973282952",
                            "miles_per_hour": "22652.214734351"
                        },
                        "miss_distance": {
                            "astronomical": "0.2411312284",
                            "lunar": "93.8000478476",
                            "kilometers": "36072718.159123508",
                            "miles": "22414547.6876920904"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "3",
                    "orbit_determination_date": "2021-04-15 19:37:38",
                    "first_observation_date": "2017-09-17",
                    "last_observation_date": "2017-10-18",
                    "data_arc_in_days": 31,
                    "observations_used": 34,
                    "orbit_uncertainty": "7",
                    "minimum_orbit_intersection": ".0284859",
                    "jupiter_tisserand_invariant": "4.784",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".2505759083265645",
                    "semi_major_axis": "1.373122887432464",
                    "inclination": ".4340049436143608",
                    "ascending_node_longitude": "169.7734580727793",
                    "orbital_period": "587.7092633367888",
                    "perihelion_distance": "1.02905137267008",
                    "perihelion_argument": "203.5736986994307",
                    "aphelion_distance": "1.717194402194849",
                    "perihelion_time": "2460969.588255993211",
                    "mean_anomaly": "18.9349199283713",
                    "mean_motion": ".6125477722710332",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "AMO",
                        "orbit_class_description": "Near-Earth asteroid orbits similar to that of 1221 Amor",
                        "orbit_class_range": "1.017 AU < q (perihelion) < 1.3 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3789664?"
                },
                "id": "3789664",
                "neo_reference_id": "3789664",
                "name": "(2017 WG14)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3789664",
                "absolute_magnitude_h": 24.5,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0334622374,
                        "estimated_diameter_max": 0.0748238376
                    },
                    "meters": {
                        "estimated_diameter_min": 33.4622374455,
                        "estimated_diameter_max": 74.8238376074
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0207924639,
                        "estimated_diameter_max": 0.0464933628
                    },
                    "feet": {
                        "estimated_diameter_min": 109.7842471007,
                        "estimated_diameter_max": 245.4850393757
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-09",
                        "close_approach_date_full": "2025-Nov-09 20:05",
                        "epoch_date_close_approach": 1762718700000,
                        "relative_velocity": {
                            "kilometers_per_second": "11.6781674127",
                            "kilometers_per_hour": "42041.4026855447",
                            "miles_per_hour": "26122.8926853597"
                        },
                        "miss_distance": {
                            "astronomical": "0.0427952638",
                            "lunar": "16.6473576182",
                            "kilometers": "6402080.310568106",
                            "miles": "3978068.2395116228"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "6",
                    "orbit_determination_date": "2021-04-15 20:07:43",
                    "first_observation_date": "2017-11-17",
                    "last_observation_date": "2017-12-07",
                    "data_arc_in_days": 20,
                    "observations_used": 21,
                    "orbit_uncertainty": "8",
                    "minimum_orbit_intersection": ".000405393",
                    "jupiter_tisserand_invariant": "8.160",
                    "epoch_osculation": "2458079.5",
                    "eccentricity": ".5399686730917485",
                    "semi_major_axis": ".6888143683780642",
                    "inclination": "8.182603309583568",
                    "ascending_node_longitude": "42.94628164020615",
                    "orbital_period": "208.810206795357",
                    "perihelion_distance": ".3168761878784301",
                    "perihelion_argument": "200.022985979746",
                    "aphelion_distance": "1.060752548877698",
                    "perihelion_time": "2457984.343825196034",
                    "mean_anomaly": "164.0543508632235",
                    "mean_motion": "1.724053653913649",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "ATE",
                        "orbit_class_description": "Near-Earth asteroid orbits similar to that of 2062 Aten",
                        "orbit_class_range": "a (semi-major axis) < 1.0 AU; q (perihelion) > 0.983 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3824114?"
                },
                "id": "3824114",
                "neo_reference_id": "3824114",
                "name": "(2018 KC)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3824114",
                "absolute_magnitude_h": 27.5,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.008405334,
                        "estimated_diameter_max": 0.0187948982
                    },
                    "meters": {
                        "estimated_diameter_min": 8.4053340207,
                        "estimated_diameter_max": 18.7948982439
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0052228308,
                        "estimated_diameter_max": 0.0116786047
                    },
                    "feet": {
                        "estimated_diameter_min": 27.5765560686,
                        "estimated_diameter_max": 61.6630539546
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-09",
                        "close_approach_date_full": "2025-Nov-09 16:03",
                        "epoch_date_close_approach": 1762704180000,
                        "relative_velocity": {
                            "kilometers_per_second": "9.3419562728",
                            "kilometers_per_hour": "33631.0425819564",
                            "miles_per_hour": "20897.0219865495"
                        },
                        "miss_distance": {
                            "astronomical": "0.0408334628",
                            "lunar": "15.8842170292",
                            "kilometers": "6108599.059604236",
                            "miles": "3795707.4463450168"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "3",
                    "orbit_determination_date": "2021-04-15 20:29:11",
                    "first_observation_date": "2018-05-16",
                    "last_observation_date": "2018-05-18",
                    "data_arc_in_days": 2,
                    "observations_used": 36,
                    "orbit_uncertainty": "7",
                    "minimum_orbit_intersection": ".00397912",
                    "jupiter_tisserand_invariant": "5.671",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".3106038574735853",
                    "semi_major_axis": "1.080546706411118",
                    "inclination": "9.206335066103492",
                    "ascending_node_longitude": "233.4748964706686",
                    "orbital_period": "410.2643143299259",
                    "perihelion_distance": ".7449247312194474",
                    "perihelion_argument": "261.9179755618304",
                    "aphelion_distance": "1.416168681602789",
                    "perihelion_time": "2461052.001433986112",
                    "mean_anomaly": "314.8083623473756",
                    "mean_motion": ".877483094253466",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3989355?"
                },
                "id": "3989355",
                "neo_reference_id": "3989355",
                "name": "(2020 CB)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3989355",
                "absolute_magnitude_h": 27.7,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0076657557,
                        "estimated_diameter_max": 0.0171411509
                    },
                    "meters": {
                        "estimated_diameter_min": 7.6657557353,
                        "estimated_diameter_max": 17.1411509231
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0047632783,
                        "estimated_diameter_max": 0.0106510141
                    },
                    "feet": {
                        "estimated_diameter_min": 25.1501180466,
                        "estimated_diameter_max": 56.2373735944
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-09",
                        "close_approach_date_full": "2025-Nov-09 11:08",
                        "epoch_date_close_approach": 1762686480000,
                        "relative_velocity": {
                            "kilometers_per_second": "9.3136818769",
                            "kilometers_per_hour": "33529.2547567214",
                            "miles_per_hour": "20833.7749903639"
                        },
                        "miss_distance": {
                            "astronomical": "0.2736090853",
                            "lunar": "106.4339341817",
                            "kilometers": "40931336.373528311",
                            "miles": "25433553.0529842518"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "3",
                    "orbit_determination_date": "2021-04-15 22:19:16",
                    "first_observation_date": "2020-02-01",
                    "last_observation_date": "2020-02-03",
                    "data_arc_in_days": 2,
                    "observations_used": 25,
                    "orbit_uncertainty": "6",
                    "minimum_orbit_intersection": ".00728517",
                    "jupiter_tisserand_invariant": "6.078",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".2851099343089895",
                    "semi_major_axis": ".9925977173183688",
                    "inclination": "3.702952093763737",
                    "ascending_node_longitude": "134.1766958148542",
                    "orbital_period": "361.2088105715432",
                    "perihelion_distance": ".7095982473384758",
                    "perihelion_argument": "248.1021404278448",
                    "aphelion_distance": "1.275597187298262",
                    "perihelion_time": "2460973.234490941732",
                    "mean_anomaly": "27.17426312344153",
                    "mean_motion": ".9966534299934976",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "ATE",
                        "orbit_class_description": "Near-Earth asteroid orbits similar to that of 2062 Aten",
                        "orbit_class_range": "a (semi-major axis) < 1.0 AU; q (perihelion) > 0.983 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54203035?"
                },
                "id": "54203035",
                "neo_reference_id": "54203035",
                "name": "(2021 TN3)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54203035",
                "absolute_magnitude_h": 25.26,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0235806068,
                        "estimated_diameter_max": 0.0527278398
                    },
                    "meters": {
                        "estimated_diameter_min": 23.5806068,
                        "estimated_diameter_max": 52.7278397554
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0146523052,
                        "estimated_diameter_max": 0.0327635505
                    },
                    "feet": {
                        "estimated_diameter_min": 77.3641980136,
                        "estimated_diameter_max": 172.9916057832
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-09",
                        "close_approach_date_full": "2025-Nov-09 05:04",
                        "epoch_date_close_approach": 1762664640000,
                        "relative_velocity": {
                            "kilometers_per_second": "12.4830197858",
                            "kilometers_per_hour": "44938.8712290521",
                            "miles_per_hour": "27923.2669589629"
                        },
                        "miss_distance": {
                            "astronomical": "0.2286162602",
                            "lunar": "88.9317252178",
                            "kilometers": "34200505.573285774",
                            "miles": "21251208.7315967212"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "8",
                    "orbit_determination_date": "2023-11-09 06:12:01",
                    "first_observation_date": "2021-10-02",
                    "last_observation_date": "2023-11-09",
                    "data_arc_in_days": 768,
                    "observations_used": 35,
                    "orbit_uncertainty": "2",
                    "minimum_orbit_intersection": ".0405777",
                    "jupiter_tisserand_invariant": "6.116",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".1959889241966343",
                    "semi_major_axis": ".9885245882318831",
                    "inclination": "4.177702114832681",
                    "ascending_node_longitude": "20.45228156519639",
                    "orbital_period": "358.9877600903272",
                    "perihelion_distance": ".7947847176423953",
                    "perihelion_argument": "137.2408304815138",
                    "aphelion_distance": "1.182264458821371",
                    "perihelion_time": "2461063.807213687567",
                    "mean_anomaly": "296.5142785876886",
                    "mean_motion": "1.002819705912586",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "ATE",
                        "orbit_class_description": "Near-Earth asteroid orbits similar to that of 2062 Aten",
                        "orbit_class_range": "a (semi-major axis) < 1.0 AU; q (perihelion) > 0.983 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54547359?"
                },
                "id": "54547359",
                "neo_reference_id": "54547359",
                "name": "(2025 SY5)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54547359",
                "absolute_magnitude_h": 23.5,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0530340723,
                        "estimated_diameter_max": 0.1185877909
                    },
                    "meters": {
                        "estimated_diameter_min": 53.0340723319,
                        "estimated_diameter_max": 118.5877908577
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0329538346,
                        "estimated_diameter_max": 0.0736870142
                    },
                    "feet": {
                        "estimated_diameter_min": 173.9963058693,
                        "estimated_diameter_max": 389.0675677576
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-09",
                        "close_approach_date_full": "2025-Nov-09 05:46",
                        "epoch_date_close_approach": 1762667160000,
                        "relative_velocity": {
                            "kilometers_per_second": "5.2905816059",
                            "kilometers_per_hour": "19046.0937812206",
                            "miles_per_hour": "11834.5019942256"
                        },
                        "miss_distance": {
                            "astronomical": "0.0992866566",
                            "lunar": "38.6225094174",
                            "kilometers": "14853072.346781442",
                            "miles": "9229271.1892982196"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "17",
                    "orbit_determination_date": "2025-11-14 05:39:03",
                    "first_observation_date": "2025-08-29",
                    "last_observation_date": "2025-11-13",
                    "data_arc_in_days": 76,
                    "observations_used": 81,
                    "orbit_uncertainty": "5",
                    "minimum_orbit_intersection": ".0955528",
                    "jupiter_tisserand_invariant": "3.561",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".4900783791837839",
                    "semi_major_axis": "2.1252464931913",
                    "inclination": "2.677896724045942",
                    "ascending_node_longitude": "254.3438844364866",
                    "orbital_period": "1131.650681293277",
                    "perihelion_distance": "1.083709136442087",
                    "perihelion_argument": "148.8633968823682",
                    "aphelion_distance": "3.166783849940512",
                    "perihelion_time": "2460986.719295777752",
                    "mean_anomaly": "4.383908923502609",
                    "mean_motion": ".3181193684155109",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "AMO",
                        "orbit_class_description": "Near-Earth asteroid orbits similar to that of 1221 Amor",
                        "orbit_class_range": "1.017 AU < q (perihelion) < 1.3 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54551737?"
                },
                "id": "54551737",
                "neo_reference_id": "54551737",
                "name": "(2025 TT2)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54551737",
                "absolute_magnitude_h": 22.61,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0799015081,
                        "estimated_diameter_max": 0.1786652037
                    },
                    "meters": {
                        "estimated_diameter_min": 79.9015081239,
                        "estimated_diameter_max": 178.6652036697
                    },
                    "miles": {
                        "estimated_diameter_min": 0.04964848,
                        "estimated_diameter_max": 0.1110173763
                    },
                    "feet": {
                        "estimated_diameter_min": 262.1440639131,
                        "estimated_diameter_max": 586.1719468077
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-09",
                        "close_approach_date_full": "2025-Nov-09 09:07",
                        "epoch_date_close_approach": 1762679220000,
                        "relative_velocity": {
                            "kilometers_per_second": "6.99744946",
                            "kilometers_per_hour": "25190.8180559427",
                            "miles_per_hour": "15652.5946970384"
                        },
                        "miss_distance": {
                            "astronomical": "0.0586722842",
                            "lunar": "22.8235185538",
                            "kilometers": "8777248.744354654",
                            "miles": "5453929.4676720652"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "12",
                    "orbit_determination_date": "2025-11-07 04:49:31",
                    "first_observation_date": "2025-10-03",
                    "last_observation_date": "2025-11-07",
                    "data_arc_in_days": 35,
                    "observations_used": 64,
                    "orbit_uncertainty": "5",
                    "minimum_orbit_intersection": ".0295058",
                    "jupiter_tisserand_invariant": "5.597",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".1885047106079298",
                    "semi_major_axis": "1.108229105314563",
                    "inclination": "5.97743883970029",
                    "ascending_node_longitude": "35.78047097929103",
                    "orbital_period": "426.1306324019273",
                    "perihelion_distance": ".8993226985299564",
                    "perihelion_argument": "84.41013524783634",
                    "aphelion_distance": "1.31713551209917",
                    "perihelion_time": "2461049.273189942973",
                    "mean_anomaly": "318.7958549694",
                    "mean_motion": ".8448113621187582",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54555537?"
                },
                "id": "54555537",
                "neo_reference_id": "54555537",
                "name": "(2025 UO12)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54555537",
                "absolute_magnitude_h": 24.649,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0312431617,
                        "estimated_diameter_max": 0.0698618334
                    },
                    "meters": {
                        "estimated_diameter_min": 31.2431617055,
                        "estimated_diameter_max": 69.8618334056
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0194135946,
                        "estimated_diameter_max": 0.0434101173
                    },
                    "feet": {
                        "estimated_diameter_min": 102.5038146499,
                        "estimated_diameter_max": 229.2054975103
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-09",
                        "close_approach_date_full": "2025-Nov-09 00:16",
                        "epoch_date_close_approach": 1762647360000,
                        "relative_velocity": {
                            "kilometers_per_second": "8.2347045028",
                            "kilometers_per_hour": "29644.9362100468",
                            "miles_per_hour": "18420.2105022927"
                        },
                        "miss_distance": {
                            "astronomical": "0.0955659812",
                            "lunar": "37.1751666868",
                            "kilometers": "14296467.231980044",
                            "miles": "8883412.8086268472"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "4",
                    "orbit_determination_date": "2025-11-14 05:39:09",
                    "first_observation_date": "2025-10-30",
                    "last_observation_date": "2025-11-13",
                    "data_arc_in_days": 14,
                    "observations_used": 31,
                    "orbit_uncertainty": "8",
                    "minimum_orbit_intersection": ".0934195",
                    "jupiter_tisserand_invariant": "3.357",
                    "epoch_osculation": "2460980.5",
                    "eccentricity": ".532971065038821",
                    "semi_major_axis": "2.312668995007121",
                    "inclination": "11.04386879713767",
                    "ascending_node_longitude": "40.07150711409457",
                    "orbital_period": "1284.602148114903",
                    "perihelion_distance": "1.080083337655916",
                    "perihelion_argument": "11.83766615751138",
                    "aphelion_distance": "3.545254652358326",
                    "perihelion_time": "2460994.357592397854",
                    "mean_anomaly": "356.1165149298963",
                    "mean_motion": ".2802424085373703",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "AMO",
                        "orbit_class_description": "Near-Earth asteroid orbits similar to that of 1221 Amor",
                        "orbit_class_range": "1.017 AU < q (perihelion) < 1.3 AU"
                    }
                },
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54561135?"
                },
                "id": "54561135",
                "neo_reference_id": "54561135",
                "name": "(2025 VA1)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54561135",
                "absolute_magnitude_h": 28.251,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0059477811,
                        "estimated_diameter_max": 0.0132996429
                    },
                    "meters": {
                        "estimated_diameter_min": 5.9477811011,
                        "estimated_diameter_max": 13.2996428574
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0036957787,
                        "estimated_diameter_max": 0.0082640124
                    },
                    "feet": {
                        "estimated_diameter_min": 19.5137181478,
                        "estimated_diameter_max": 43.6340002722
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-09",
                        "close_approach_date_full": "2025-Nov-09 21:58",
                        "epoch_date_close_approach": 1762725480000,
                        "relative_velocity": {
                            "kilometers_per_second": "14.1733296401",
                            "kilometers_per_hour": "51023.9867044374",
                            "miles_per_hour": "31704.3210719878"
                        },
                        "miss_distance": {
                            "astronomical": "0.0019001607",
                            "lunar": "0.7391625123",
                            "kilometers": "284259.993377709",
                            "miles": "176630.9693980242"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "6",
                    "orbit_determination_date": "2025-11-14 05:39:13",
                    "first_observation_date": "2025-11-10",
                    "last_observation_date": "2025-11-14",
                    "data_arc_in_days": 4,
                    "observations_used": 54,
                    "orbit_uncertainty": "6",
                    "minimum_orbit_intersection": ".000695324",
                    "jupiter_tisserand_invariant": "4.400",
                    "epoch_osculation": "2461000.5",
                    "eccentricity": ".4986429035757609",
                    "semi_major_axis": "1.49944397657042",
                    "inclination": "2.129001191811624",
                    "ascending_node_longitude": "48.4232240961362",
                    "orbital_period": "670.6467013142757",
                    "perihelion_distance": ".7517568783441607",
                    "perihelion_argument": "284.8407755194539",
                    "aphelion_distance": "2.24713107479668",
                    "perihelion_time": "2460940.630426494718",
                    "mean_anomaly": "32.13770591827841",
                    "mean_motion": ".5367953041362956",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": true,
                "sentry_data": "http://api.nasa.gov/neo/rest/v1/neo/sentry/54561135?"
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54561375?"
                },
                "id": "54561375",
                "neo_reference_id": "54561375",
                "name": "(2025 VZ1)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54561375",
                "absolute_magnitude_h": 24.216,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.038137742,
                        "estimated_diameter_max": 0.0852785837
                    },
                    "meters": {
                        "estimated_diameter_min": 38.1377420146,
                        "estimated_diameter_max": 85.278583653
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0236976869,
                        "estimated_diameter_max": 0.0529896388
                    },
                    "feet": {
                        "estimated_diameter_min": 125.1238295113,
                        "estimated_diameter_max": 279.7853883923
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2025-11-09",
                        "close_approach_date_full": "2025-Nov-09 04:16",
                        "epoch_date_close_approach": 1762661760000,
                        "relative_velocity": {
                            "kilometers_per_second": "9.4837554065",
                            "kilometers_per_hour": "34141.5194634018",
                            "miles_per_hour": "21214.2124688009"
                        },
                        "miss_distance": {
                            "astronomical": "0.0138069863",
                            "lunar": "5.3709176707",
                            "kilometers": "2065495.741599181",
                            "miles": "1283439.5399474578"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "orbital_data": {
                    "orbit_id": "2",
                    "orbit_determination_date": "2025-11-13 05:20:59",
                    "first_observation_date": "2025-11-10",
                    "last_observation_date": "2025-11-13",
                    "data_arc_in_days": 3,
                    "observations_used": 31,
                    "orbit_uncertainty": "8",
                    "minimum_orbit_intersection": ".00705438",
                    "jupiter_tisserand_invariant": "3.181",
                    "epoch_osculation": "2460990.5",
                    "eccentricity": ".6138972710484006",
                    "semi_major_axis": "2.488330582114575",
                    "inclination": "3.320833084064821",
                    "ascending_node_longitude": "236.8659624672152",
                    "orbital_period": "1433.707452110611",
                    "perihelion_distance": ".9607512282881593",
                    "perihelion_argument": "149.8780762590409",
                    "aphelion_distance": "4.015909935940991",
                    "perihelion_time": "2460973.148793498437",
                    "mean_anomaly": "4.3568402545213",
                    "mean_motion": ".2510972510256756",
                    "equinox": "J2000",
                    "orbit_class": {
                        "orbit_class_type": "APO",
                        "orbit_class_description": "Near-Earth asteroid orbits which cross the Earth’s orbit similar to that of 1862 Apollo",
                        "orbit_class_range": "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU"
                    }
                },
                "is_sentry_object": false
            }
        ]
    }
}`);
