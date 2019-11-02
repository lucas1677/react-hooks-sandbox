import React, {useState} from "react";

export default function () {
    const [addressOriData] = useState([
        {
            id: 1,
            provinceName: "p1",
            cities: [
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
            cities: [
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
        provinceId: 1,
        cityId: 1001
    });

    function handleFirstLevelChange(id) {
        setAddressSelectedInfo({
            provinceId: id,
            cityId: addressOriData.filter(i => Number(i.id) === Number(id)).concat().pop().cities.concat().pop().id
        });
    }

    function handleSecondLevelChange(id) {
        setAddressSelectedInfo({
            provinceId: addressSelectedInfo.provinceId,
            cityId: id
        });
    }

    function genAddressPicker(firstLevel, secondLevel, selectInfo) {
        return (
            <div className="App">
                <select
                    defaultValue={selectInfo.provinceId}
                    onChange={e => handleFirstLevelChange(e.target.value)}
                >
                    {firstLevel.map(i => {
                        return (
                            <option
                                key={i.id}
                                value={i.id}
                            >
                                {i.provinceName}
                            </option>
                        );
                    })}
                </select>
                <select
                    defaultValue={selectInfo.cityId}
                    onChange={e => handleSecondLevelChange(e.target.value)}
                >
                    {
                        secondLevel.map(i => {
                            return (
                                <option
                                    key={i.id}
                                    value={i.id}
                                >
                                    {i.cityName}
                                </option>
                            );
                        })}
                </select>
            </div>
        );
    }

    return genAddressPicker(
        addressOriData,
        addressOriData.filter((i) => (Number(i.id) === Number(addressSelectedInfo.provinceId))).concat().pop().cities,
        addressSelectedInfo
    );
}
