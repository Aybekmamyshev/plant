import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
    <ContentLoader
        speed={2}
        width={260}
        height={350}
        viewBox="0 0 260 350"
        backgroundColor="#f9f5f5"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="188" y="309" rx="0" ry="0" width="8" height="1" />
        <rect x="34" y="40" rx="0" ry="0" width="1" height="0" />
        <rect x="319" y="10" rx="0" ry="0" width="27" height="25" />
        <rect x="361" y="11" rx="0" ry="0" width="27" height="25" />
        <rect x="424" y="10" rx="0" ry="0" width="86" height="25" />
        <rect x="-20" y="-14" rx="0" ry="0" width="306" height="219" />
        <rect x="35" y="219" rx="0" ry="0" width="46" height="38" />
        <rect x="101" y="219" rx="0" ry="0" width="46" height="38" />
        <rect x="171" y="218" rx="0" ry="0" width="46" height="38" />
        <rect x="0" y="265" rx="0" ry="0" width="285" height="28" />
        <rect x="0" y="312" rx="0" ry="0" width="269" height="28" />
    </ContentLoader>
)

export default MyLoader
