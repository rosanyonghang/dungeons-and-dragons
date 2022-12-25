import {Navbar} from "@mantine/core";
import {NavLink} from "react-router-dom";

export const NavPartial = () => {
    const links = [
        {label: "Spell", path: "/"},
        {label: "Favorites", path: "/favorites"},
    ];
    return <Navbar height={600} p="xs" width={{base: 300}}>
        <div className="flex flex-col w-full">
            {links.map((v, key: number) => (
                <NavLink className={"nav-link hover:bg-gray-100 cursor-pointer py-sm rounded-xl px-md"} to={v.path}
                         key={key}>{v.label}</NavLink>
            ))}
        </div>
    </Navbar>
}