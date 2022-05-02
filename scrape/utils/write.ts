import fs from "fs";

export const write = async (path: string, data: string) => {
    await fs.writeFile('text/carm1.html', data, (err) => {
        if (err) console.log(err)
    })
}