package models

type BodyDiameter struct {
	EstimatedDiameterMin float64 `json:"estimated_diameter_min"`
	EstimatedDiameterMax float64 `json:"estimated_diameter_max"`
}

type BodyEstimatedDiameter struct {
	Kilometers BodyDiameter `json:"kilometers"`
	Meters     BodyDiameter `json:"meters"`
	Miles      BodyDiameter `json:"miles"`
	Feet       BodyDiameter `json:"feet"`
}

type BodyRelativeVelocity struct {
	KilometersPerSecond string `json:"kilometers_per_second"`
	KilometersPerHour   string `json:"kilometers_per_hour"`
	MilesPerHour        string `json:"miles_per_hour"`
}

type BodyMissDistance struct {
	Astronomical string `json:"astronomical"`
	Lunar        string `json:"lunar"`
	Kilometers   string `json:"kilometers"`
	Miles        string `json:"miles"`
}

type BodyCloseApproachDate struct {
	CloseApproachDate      string               `json:"close_approach_date"`
	CloseApproachDateFull  string               `json:"close_approach_date_full"`
	EpochDateCloseApproach int64                `json:"epoch_date_close_approach"`
	RelativeVelocity       BodyRelativeVelocity `json:"relative_velocity"`
	MissDistance           BodyMissDistance     `json:"miss_distance"`
}

type BodyOrbitalData struct {
	OrbitalId                 string `json:"orbit_id"`
	MinimumOrbitIntersection  string `json:"minimum_orbit_intersection"`
	JupiterTisserandInvariant string `json:"jupiter_tisserand_invariant"`
	EpochOsculation           string `json:"epoch_osculation"`
	Eccentricity              string `json:"eccentricity"`
	SemiMajorAxis             string `json:"semi_major_axis"`
	Inclination               string `json:"inclination"`
	AscendingNodeLongitude    string `json:"ascending_node_longitude"`
	OrbitalPeriod             string `json:"orbital_period"`
	PerihelionDistance        string `json:"perihelion_distance"`
	PerihelionArgument        string `json:"perihelion_argument"`
	AphelionDistance          string `json:"aphelion_distance"`
	PerihelionTime            string `json:"perihelion_time"`
	MeanAnomaly               string `json:"mean_anomaly"`
	MeanMotion                string `json:"mean_motion"`
	Equinox                   string `json:"equinox"`
}

type Body struct {
	Id                string                `json:"id"`
	Name              string                `json:"name"`
	Designation       string                `json:"designation"`
	EstimatedDiameter BodyEstimatedDiameter `json:"estimated_diameter"`
	OrbitalData       BodyOrbitalData       `json:"orbital_data"`
	// CloseApproachData []BodyCloseApproachDate `json:"close_approach_data"`
}
