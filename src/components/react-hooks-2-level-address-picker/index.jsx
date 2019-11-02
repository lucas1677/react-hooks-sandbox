import React, {useState} from "react";

export default function () {
    const [addressOriData, setAddressOriData] = useState([
        {
            id: 1,
            provinceName: "p1",
            citys: [
                {
                    id: 1001,
                    cityName: "c1001"
                },
                {
                    id: 1002,
                    cityName: "c1002"
                },
                {
                    id: 1003,
                    cityName: "c1003"
                }
            ]
        },
        {
            id: 2,
            provinceName: "p2",
            citys: [
                {
                    id: 2001,
                    cityName: "c2001"
                },
                {
                    id: 2002,
                    cityName: "c2002"
                },
                {
                    id: 2003,
                    cityName: "c2003"
                }
            ]
        }
    ]);

    const [addressSelectedInfo, setAddressSelectedInfo] = useState({
        provinceId: 2,
        cityId: 1001
    });

    return (
        <div className="App">
            <select
                onChange={e =>
                    setAddressSelectedInfo({
                        provinceId: e.value,
                        cityId: ""
                    })
                }
            >
                {addressOriData.map(i => {
                    return (
                        <option
                            key={i.provinceId}
                            selected={
                                addressSelectedInfo.provinceId === i.provinceId ? "" : ""
                            }
                            value={i.provinceId}
                        >
                            {i.provinceName}
                        </option>
                    );
                })}
            </select>
            <select
                onChange={e =>
                    setAddressSelectedInfo({
                        provinceId: e.value,
                        cityId: ""
                    })
                }
            >
                {addressOriData
                    .filter(i => i.id === addressSelectedInfo.provinceId)
                    .pop()
                    .citys.map(i => {
                        return (
                            <option
                                key={i.provinceId}
                                selected={
                                    addressSelectedInfo.provinceId === i.provinceId ? "" : ""
                                }
                                value={i.provinceId}
                            >
                                {i.provinceName}
                            </option>
                        );
                    })}
            </select>
        </div>
    );
}
