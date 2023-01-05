import { Link } from "react-router-dom";

const VecTable = (id) => {
    return (
        <>
            <table>
                <tr>
                    <td className="border-2 border-gray-300 rounded-lg">
                        <input className="w-full h-full" id={id + "-1"} />
                    </td>
                </tr>
                <tr>
                    <td className="border-2 border-gray-300 rounded-lg">
                        <input className="w-full h-full" id={id + "-2"} />
                    </td>
                </tr>
                <tr>
                    <td className="border-2 border-gray-300 rounded-lg">
                        <input className="w-full h-full" id={id + "-3"} />
                    </td>
                </tr>
            </table>
        </>
    );
};

const Solve = () => {
    let a = [];
    let b = [];
    let c = [];
    for (let i = 1; i <= 3; i++) {
        const num_a = Number(
            document.getElementById("vec_a-" + i).value
        ).toFixed(3);
        const num_b = Number(
            document.getElementById("vec_b-" + i).value
        ).toFixed(3);
        const num_c = Number(
            document.getElementById("vec_c-" + i).value
        ).toFixed(3);
        if (isNaN(num_a) || isNaN(num_b) || isNaN(num_c)) {
            alert("Input is not a number");
            return;
        }
        a.push(num_a);
        b.push(num_b);
        c.push(num_c);
    }

    const a_T_a = (a[0] ** 2 + a[1] ** 2 + a[2] ** 2).toFixed(3);
    const a_T_b = (a[0] * b[0] + a[1] * b[1] + a[2] * b[2]).toFixed(3);
    const a_T_b_div_a_T_a = a_T_b / a_T_a;
    const B = [
        (b[0] - a_T_b_div_a_T_a * a[0]).toFixed(3),
        (b[1] - a_T_b_div_a_T_a * a[1]).toFixed(3),
        (b[2] - a_T_b_div_a_T_a * a[2]).toFixed(3),
    ];
    const B_T_B = (B[0] ** 2 + B[1] ** 2 + B[2] ** 2).toFixed(3);
    const B_T_c = (B[0] * c[0] + B[1] * c[1] + B[2] * c[2]).toFixed(3);
    const A_T_c = (a[0] * c[0] + a[1] * c[1] + a[2] * c[2]).toFixed(3);
    const A_T_c_div_A_T_A = A_T_c / a_T_a;
    const B_T_c_div_B_T_B = B_T_c / B_T_B;
    const C = [
        (c[0] - A_T_c_div_A_T_A * a[0] - B_T_c_div_B_T_B * B[0]).toFixed(3),
        (c[1] - A_T_c_div_A_T_A * a[1] - B_T_c_div_B_T_B * B[1]).toFixed(3),
        (c[2] - A_T_c_div_A_T_A * a[2] - B_T_c_div_B_T_B * B[2]).toFixed(3),
    ];
    const A_size = Math.sqrt(a[0] ** 2 + a[1] ** 2 + a[2] ** 2);
    const q1 = [
        (a[0] / A_size).toFixed(3),
        (a[1] / A_size).toFixed(3),
        (a[2] / A_size).toFixed(3),
    ];
    const B_size = Math.sqrt(B[0] ** 2 + B[1] ** 2 + B[2] ** 2);
    const q2 = [
        (B[0] / B_size).toFixed(3),
        (B[1] / B_size).toFixed(3),
        (B[2] / B_size).toFixed(3),
    ];
    const C_size = Math.sqrt(C[0] ** 2 + C[1] ** 2 + C[2] ** 2);
    const q3 = [
        (C[0] / C_size).toFixed(3),
        (C[1] / C_size).toFixed(3),
        (C[2] / C_size).toFixed(3),
    ];

    const detail_ans = `
    let A = a<br /><br />
    <div class="flex flex-row space-x-5">
        <div class="flex flex-col justify-center -mr-2">
            <div>
                A<sup>T</sup>A = 
            </div>
        </div>
        <div class="flex flex-row space-x-5">
            <table class="relative before:border-black before:border-solid before:border before:h-full before:absolute before:top-0 before:w-[6px] before:border-r-0 before:-left-[6px] after:border-black after:border-solid after:border after:h-full after:absolute after:top-0 after:w-[6px] after:border-l-0 after:-right-[6px]">
                <tr>
                    <td class="px-2 text-center">${a[0]}</td>
                </tr>
                <tr>
                    <td class="px-2 text-center">${a[1]}</td>
                </tr>
                <tr>
                    <td class="px-2 text-center">${a[2]}</td>
                </tr>
            </table>
            <div class="flex flex-col justify-center">
                <table class="relative before:border-black before:border-solid before:border before:h-full before:absolute before:top-0 before:w-[6px] before:border-r-0 before:-left-[6px] after:border-black after:border-solid after:border after:h-full after:absolute after:top-0 after:w-[6px] after:border-l-0 after:-right-[6px]">
                    <tr>
                        <td class="px-2 text-center">${a[0]}</td>
                        <td class="px-2 text-center">${a[1]}</td>
                        <td class="px-2 text-center">${a[2]}</td>
                    </tr>
                    </div>
                </table>
            </div>
            <div class="flex flex-col justify-center !ml-3">
                = ${a_T_a}
            </div>
        </div>
    </div>
    <br />
    <div class="flex flex-row space-x-5">
        <div class="flex flex-col justify-center -mr-2">
            <div>
                A<sup>T</sup>b = 
            </div>
        </div>
        <div class="flex flex-row space-x-5">
            <table class="relative before:border-black before:border-solid before:border before:h-full before:absolute before:top-0 before:w-[6px] before:border-r-0 before:-left-[6px] after:border-black after:border-solid after:border after:h-full after:absolute after:top-0 after:w-[6px] after:border-l-0 after:-right-[6px]">
                <tr>
                    <td class="px-2 text-center">${a[0]}</td>
                </tr>
                <tr>
                    <td class="px-2 text-center">${a[1]}</td>
                </tr>
                <tr>
                    <td class="px-2 text-center">${a[2]}</td>
                </tr>
            </table>
            <div class="flex flex-col justify-center">
                <table class="relative before:border-black before:border-solid before:border before:h-full before:absolute before:top-0 before:w-[6px] before:border-r-0 before:-left-[6px] after:border-black after:border-solid after:border after:h-full after:absolute after:top-0 after:w-[6px] after:border-l-0 after:-right-[6px]">
                    <tr>
                        <td class="px-2 text-center">${b[0]}</td>
                        <td class="px-2 text-center">${b[1]}</td>
                        <td class="px-2 text-center">${b[2]}</td>
                    </tr>
                    </div>
                </table>
            </div>
            <div class="flex flex-col justify-center !ml-3">
                = ${a_T_b}
            </div>
        </div>
    </div>
    <br />
    <div class="flex flex-row">
        <div class="flex flex-col justify-center">
            B = b - 
        </div>
        <div class="mx-2 flex flex-col justify-center">
            <div class="border-black border-solid border-b float-left text-center">A<sup>T</sup>b</div>
            <div class="float-left clear-left text-center">A<sup>T</sup>A</div>
        </div>
        <div class="flex flex-col justify-center">
            A = 
        </div>
        <table class="ml-3 relative before:border-black before:border-solid before:border before:h-full before:absolute before:top-0 before:w-[6px] before:border-r-0 before:-left-[6px] after:border-black after:border-solid after:border after:h-full after:absolute after:top-0 after:w-[6px] after:border-l-0 after:-right-[6px]">
            <tr>
                <td class="px-2 text-center">${b[0]}</td>
            </tr>
            <tr>
                <td class="px-2 text-center">${b[1]}</td>
            </tr>
            <tr>
                <td class="px-2 text-center">${b[2]}</td>
            </tr>
        </table>
        <div class="flex flex-col justify-center ml-3">
            -
        </div>
        <div class="mx-2 flex flex-col justify-center">
            <div class="border-black border-solid border-b float-left text-center">${a_T_b}</div>
            <div class="float-left clear-left text-center">${a_T_a}</div>
        </div>
        <table class="ml-3 relative before:border-black before:border-solid before:border before:h-full before:absolute before:top-0 before:w-[6px] before:border-r-0 before:-left-[6px] after:border-black after:border-solid after:border after:h-full after:absolute after:top-0 after:w-[6px] after:border-l-0 after:-right-[6px]">
            <tr>
                <td class="px-2 text-center">${a[0]}</td>
            </tr>
            <tr>
                <td class="px-2 text-center">${a[1]}</td>
            </tr>
            <tr>
                <td class="px-2 text-center">${a[2]}</td>
            </tr>
        </table>
        <div class="flex flex-col justify-center !ml-3">
                =
        </div>
        <table class="ml-3 relative before:border-black before:border-solid before:border before:h-full before:absolute before:top-0 before:w-[6px] before:border-r-0 before:-left-[6px] after:border-black after:border-solid after:border after:h-full after:absolute after:top-0 after:w-[6px] after:border-l-0 after:-right-[6px]">
            <tr>
                <td class="px-2 text-center">${B[0]}</td>
            </tr>
            <tr>
                <td class="px-2 text-center">${B[1]}</td>
            </tr>
            <tr>
                <td class="px-2 text-center">${B[2]}</td>
            </tr>
        </table>
    </div>
    <br />
    <div class="flex flex-row space-x-5">
        <div class="flex flex-col justify-center -mr-2">
            <div>
                B<sup>T</sup>B = 
            </div>
        </div>
        <div class="flex flex-row space-x-5">
            <table class="relative before:border-black before:border-solid before:border before:h-full before:absolute before:top-0 before:w-[6px] before:border-r-0 before:-left-[6px] after:border-black after:border-solid after:border after:h-full after:absolute after:top-0 after:w-[6px] after:border-l-0 after:-right-[6px]">
                <tr>
                    <td class="px-2 text-center">${B[0]}</td>
                </tr>
                <tr>
                    <td class="px-2 text-center">${B[1]}</td>
                </tr>
                <tr>
                    <td class="px-2 text-center">${B[2]}</td>
                </tr>
            </table>
            <div class="flex flex-col justify-center">
                <table class="relative before:border-black before:border-solid before:border before:h-full before:absolute before:top-0 before:w-[6px] before:border-r-0 before:-left-[6px] after:border-black after:border-solid after:border after:h-full after:absolute after:top-0 after:w-[6px] after:border-l-0 after:-right-[6px]">
                    <tr>
                        <td class="px-2 text-center">${B[0]}</td>
                        <td class="px-2 text-center">${B[1]}</td>
                        <td class="px-2 text-center">${B[2]}</td>
                    </tr>
                    </div>
                </table>
            </div>
            <div class="flex flex-col justify-center !ml-3">
                = ${B_T_B}
            </div>
        </div>
    </div>
    <br />
    <div class="flex flex-row space-x-5">
        <div class="flex flex-col justify-center -mr-2">
            <div>
                B<sup>T</sup>c = 
            </div>
        </div>
        <div class="flex flex-row space-x-5">
            <table class="relative before:border-black before:border-solid before:border before:h-full before:absolute before:top-0 before:w-[6px] before:border-r-0 before:-left-[6px] after:border-black after:border-solid after:border after:h-full after:absolute after:top-0 after:w-[6px] after:border-l-0 after:-right-[6px]">
                <tr>
                    <td class="px-2 text-center">${B[0]}</td>
                </tr>
                <tr>
                    <td class="px-2 text-center">${B[1]}</td>
                </tr>
                <tr>
                    <td class="px-2 text-center">${B[2]}</td>
                </tr>
            </table>
            <div class="flex flex-col justify-center">
                <table class="relative before:border-black before:border-solid before:border before:h-full before:absolute before:top-0 before:w-[6px] before:border-r-0 before:-left-[6px] after:border-black after:border-solid after:border after:h-full after:absolute after:top-0 after:w-[6px] after:border-l-0 after:-right-[6px]">
                    <tr>
                        <td class="px-2 text-center">${c[0]}</td>
                        <td class="px-2 text-center">${c[1]}</td>
                        <td class="px-2 text-center">${c[2]}</td>
                    </tr>
                    </div>
                </table>
            </div>
            <div class="flex flex-col justify-center !ml-3">
                = ${B_T_c}
            </div>
        </div>
    </div>
    <br>
    <div class="flex flex-row space-x-5">
        <div class="flex flex-col justify-center -mr-2">
            <div>
                A<sup>T</sup>c = 
            </div>
        </div>
        <div class="flex flex-row space-x-5">
            <table class="relative before:border-black before:border-solid before:border before:h-full before:absolute before:top-0 before:w-[6px] before:border-r-0 before:-left-[6px] after:border-black after:border-solid after:border after:h-full after:absolute after:top-0 after:w-[6px] after:border-l-0 after:-right-[6px]">
                <tr>
                    <td class="px-2 text-center">${a[0]}</td>
                </tr>
                <tr>
                    <td class="px-2 text-center">${a[1]}</td>
                </tr>
                <tr>
                    <td class="px-2 text-center">${a[2]}</td>
                </tr>
            </table>
            <div class="flex flex-col justify-center">
                <table class="relative before:border-black before:border-solid before:border before:h-full before:absolute before:top-0 before:w-[6px] before:border-r-0 before:-left-[6px] after:border-black after:border-solid after:border after:h-full after:absolute after:top-0 after:w-[6px] after:border-l-0 after:-right-[6px]">
                    <tr>
                        <td class="px-2 text-center">${c[0]}</td>
                        <td class="px-2 text-center">${c[1]}</td>
                        <td class="px-2 text-center">${c[2]}</td>
                    </tr>
                    </div>
                </table>
            </div>
            <div class="flex flex-col justify-center !ml-3">
                = ${A_T_c}
            </div>
        </div>
    </div>
    <div class="flex flex-row">
        <div class="flex flex-col justify-center">
            C = c - 
        </div>
        <div class="mx-2 flex flex-col justify-center">
            <div class="border-black border-solid border-b float-left text-center">A<sup>T</sup>c</div>
            <div class="float-left clear-left text-center">A<sup>T</sup>A</div>
        </div>
        <div class="flex flex-col justify-center">
            A - 
        </div>
        <div class="mx-2 flex flex-col justify-center">
            <div class="border-black border-solid border-b float-left text-center">B<sup>T</sup>c</div>
            <div class="float-left clear-left text-center">B<sup>T</sup>B</div>
        </div>
        <div class="flex flex-col justify-center">
            B =  
        </div>
        <table class="ml-3 relative before:border-black before:border-solid before:border before:h-full before:absolute before:top-0 before:w-[6px] before:border-r-0 before:-left-[6px] after:border-black after:border-solid after:border after:h-full after:absolute after:top-0 after:w-[6px] after:border-l-0 after:-right-[6px]">
            <tr>
                <td class="px-2 text-center">${c[0]}</td>
            </tr>
            <tr>
                <td class="px-2 text-center">${c[1]}</td>
            </tr>
            <tr>
                <td class="px-2 text-center">${c[2]}</td>
            </tr>
        </table>
        <div class="flex flex-col justify-center ml-3">
            -
        </div>
        <div class="mx-2 flex flex-col justify-center">
            <div class="border-black border-solid border-b float-left text-center">${A_T_c}</div>
            <div class="float-left clear-left text-center">${a_T_a}</div>
        </div>
        <table class="ml-3 relative before:border-black before:border-solid before:border before:h-full before:absolute before:top-0 before:w-[6px] before:border-r-0 before:-left-[6px] after:border-black after:border-solid after:border after:h-full after:absolute after:top-0 after:w-[6px] after:border-l-0 after:-right-[6px]">
            <tr>
                <td class="px-2 text-center">${a[0]}</td>
            </tr>
            <tr>
                <td class="px-2 text-center">${a[1]}</td>
            </tr>
            <tr>
                <td class="px-2 text-center">${a[2]}</td>
            </tr>
        </table>
        <div class="flex flex-col justify-center ml-3">
            -
        </div>
        <div class="mx-2 flex flex-col justify-center">
            <div class="border-black border-solid border-b float-left text-center">${B_T_c}</div>
            <div class="float-left clear-left text-center">${B_T_B}</div>
        </div>
        <table class="ml-3 relative before:border-black before:border-solid before:border before:h-full before:absolute before:top-0 before:w-[6px] before:border-r-0 before:-left-[6px] after:border-black after:border-solid after:border after:h-full after:absolute after:top-0 after:w-[6px] after:border-l-0 after:-right-[6px]">
            <tr>
                <td class="px-2 text-center">${B[0]}</td>
            </tr>
            <tr>
                <td class="px-2 text-center">${B[1]}</td>
            </tr>
            <tr>
                <td class="px-2 text-center">${B[2]}</td>
            </tr>
        </table>
        <div class="flex flex-col justify-center !ml-3">
                =
        </div>
        <table class="ml-3 relative before:border-black before:border-solid before:border before:h-full before:absolute before:top-0 before:w-[6px] before:border-r-0 before:-left-[6px] after:border-black after:border-solid after:border after:h-full after:absolute after:top-0 after:w-[6px] after:border-l-0 after:-right-[6px]">
            <tr>
                <td class="px-2 text-center">${C[0]}</td>
            </tr>
            <tr>
                <td class="px-2 text-center">${C[1]}</td>
            </tr>
            <tr>
                <td class="px-2 text-center">${C[2]}</td>
            </tr>
        </table>
    </div>
    <br />
    <div class="flex flex-row text-green-600">
        <div class="flex flex-col justify-center">
            <div>
                q<sub>1</sub> = 
            </div>
        </div>
        <div class="mx-2 flex flex-col justify-center">
            <div class="border-green-600 border-solid border-b float-left text-center">A</div>
            <div class="float-left clear-left text-center">||A||</div>
        </div>
        <div class="flex flex-col justify-center">
            = 
        </div>
        <div class="mx-2 flex flex-col justify-center">
            <div class="border-green-600 border-solid border-b float-left text-center">1</div>
            <div class="float-left clear-left text-center">
                <span class="whitespace-nowrap">
                    &radic;<span class="overline">&nbsp;(${a[0]})<sup>2</sup>+(${a[1]})<sup>2</sup>+(${a[2]})<sup>2</sup>&nbsp;</span>
                </span>
            </div>
        </div>
        <table class="ml-3 relative before:border-green-600 before:border-solid before:border before:h-full before:absolute before:top-0 before:w-[6px] before:border-r-0 before:-left-[6px] after:border-green-600 after:border-solid after:border after:h-full after:absolute after:top-0 after:w-[6px] after:border-l-0 after:-right-[6px]">
            <tr>
                <td class="px-2 text-center">${a[0]}</td>
            </tr>
            <tr>
                <td class="px-2 text-center">${a[1]}</td>
            </tr>
            <tr>
                <td class="px-2 text-center">${a[2]}</td>
            </tr>
        </table>
        <div class="flex flex-col justify-center !ml-3">
                =
        </div>
        <table class="ml-3 relative before:border-green-600 before:border-solid before:border before:h-full before:absolute before:top-0 before:w-[6px] before:border-r-0 before:-left-[6px] after:border-green-600 after:border-solid after:border after:h-full after:absolute after:top-0 after:w-[6px] after:border-l-0 after:-right-[6px]">
            <tr>
                <td class="px-2 text-center">${q1[0]}</td>
            </tr>
            <tr>
                <td class="px-2 text-center">${q1[1]}</td>
            </tr>
            <tr>
                <td class="px-2 text-center">${q1[2]}</td>
            </tr>
        </table>
    </div>
    <br />
    <div class="flex flex-row text-green-600">
        <div class="flex flex-col justify-center">
            <div>
                q<sub>2</sub> = 
            </div>
        </div>
        <div class="mx-2 flex flex-col justify-center">
            <div class="border-green-600 border-solid border-b float-left text-center">B</div>
            <div class="float-left clear-left text-center">||B||</div>
        </div>
        <div class="flex flex-col justify-center">
            = 
        </div>
        <div class="mx-2 flex flex-col justify-center">
            <div class="border-green-600 border-solid border-b float-left text-center">1</div>
            <div class="float-left clear-left text-center">
                <span class="whitespace-nowrap">
                    &radic;<span class="overline">&nbsp;(${B[0]})<sup>2</sup>+(${B[1]})<sup>2</sup>+(${B[2]})<sup>2</sup>&nbsp;</span>
                </span>
            </div>
        </div>
        <table class="ml-3 relative before:border-green-600 before:border-solid before:border before:h-full before:absolute before:top-0 before:w-[6px] before:border-r-0 before:-left-[6px] after:border-green-600 after:border-solid after:border after:h-full after:absolute after:top-0 after:w-[6px] after:border-l-0 after:-right-[6px]">
            <tr>
                <td class="px-2 text-center">${B[0]}</td>
            </tr>
            <tr>
                <td class="px-2 text-center">${B[1]}</td>
            </tr>
            <tr>
                <td class="px-2 text-center">${B[2]}</td>
            </tr>
        </table>
        <div class="flex flex-col justify-center !ml-3">
                =
        </div>
        <table class="ml-3 relative before:border-green-600 before:border-solid before:border before:h-full before:absolute before:top-0 before:w-[6px] before:border-r-0 before:-left-[6px] after:border-green-600 after:border-solid after:border after:h-full after:absolute after:top-0 after:w-[6px] after:border-l-0 after:-right-[6px]">
            <tr>
                <td class="px-2 text-center">${q2[0]}</td>
            </tr>
            <tr>
                <td class="px-2 text-center">${q2[1]}</td>
            </tr>
            <tr>
                <td class="px-2 text-center">${q2[2]}</td>
            </tr>
        </table>
    </div>
    <br />
    <div class="flex flex-row text-green-600">
        <div class="flex flex-col justify-center">
            <div>
                q<sub>3</sub> = 
            </div>
        </div>
        <div class="mx-2 flex flex-col justify-center">
            <div class="border-green-600 border-solid border-b float-left text-center">C</div>
            <div class="float-left clear-left text-center">||C||</div>
        </div>
        <div class="flex flex-col justify-center">
            = 
        </div>
        <div class="mx-2 flex flex-col justify-center">
            <div class="border-green-600 border-solid border-b float-left text-center">1</div>
            <div class="float-left clear-left text-center">
                <span class="whitespace-nowrap">
                    &radic;<span class="overline">&nbsp;(${C[0]})<sup>2</sup>+(${C[1]})<sup>2</sup>+(${C[2]})<sup>2</sup>&nbsp;</span>
                </span>
            </div>
        </div>
        <table class="ml-3 relative before:border-green-600 before:border-solid before:border before:h-full before:absolute before:top-0 before:w-[6px] before:border-r-0 before:-left-[6px] after:border-green-600 after:border-solid after:border after:h-full after:absolute after:top-0 after:w-[6px] after:border-l-0 after:-right-[6px]">
            <tr>
                <td class="px-2 text-center">${C[0]}</td>
            </tr>
            <tr>
                <td class="px-2 text-center">${C[1]}</td>
            </tr>
            <tr>
                <td class="px-2 text-center">${C[2]}</td>
            </tr>
        </table>
        <div class="flex flex-col justify-center !ml-3">
                =
        </div>
        <table class="ml-3 relative before:border-green-600 before:border-solid before:border before:h-full before:absolute before:top-0 before:w-[6px] before:border-r-0 before:-left-[6px] after:border-green-600 after:border-solid after:border after:h-full after:absolute after:top-0 after:w-[6px] after:border-l-0 after:-right-[6px]">
            <tr>
                <td class="px-2 text-center">${q3[0]}</td>
            </tr>
            <tr>
                <td class="px-2 text-center">${q3[1]}</td>
            </tr>
            <tr>
                <td class="px-2 text-center">${q3[2]}</td>
            </tr>
        </table>
    </div>
    `;

    /*set answer to vec_a */
    for (let i = 0; i < 3; i++) {
        document.getElementById(`vec_q1-${i + 1}`).setAttribute("value", q1[i]);
        document.getElementById(`vec_q2-${i + 1}`).setAttribute("value", q2[i]);
        document.getElementById(`vec_q3-${i + 1}`).setAttribute("value", q3[i]);
    }

    document.getElementById("answer").innerHTML = detail_ans;
};

const App = () => {
    return (
        <div className="font-manrope py-16 px-24 max-md:py-16 max-sm:py-16 max-sm:px-8 bg-white">
            <div className="flex flex-col space-y-3">
                <h1 className="text-4xl font-extrabold">Gram-Schmidt Solver</h1>
                <p className="text-lg font-medium">
                    Created with 💕 by <Link to="/" className="text-blue-500 hover:text-blue-700 underline">DulapahV</Link>
                </p>
            </div>
            <label className="flex text-2xl font-bold mt-5">
                Input Vectors
            </label>
            <div className="flex flex-row space-x-5 mb-7">
                <div className="flex flex-col w-full">
                    <label className="text-lg font-medium my-3">a</label>
                    {VecTable("vec_a")}
                </div>
                <div className="flex flex-col w-full">
                    <label className="text-lg font-medium my-3">b</label>
                    {VecTable("vec_b")}
                </div>
                <div className="flex flex-col w-full">
                    <label className="text-lg font-medium my-3">c</label>
                    {VecTable("vec_c")}
                </div>
            </div>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded"
                onClick={() => Solve()}
            >
                Solve
            </button>
            <div className="flex flex-col">
                <label className="text-2xl font-bold mt-7">
                    Answer Vectors
                </label>
                <div className="flex flex-row space-x-5 mb-7">
                    <div className="flex flex-col w-full">
                        <label className="text-lg font-medium my-3">
                            q<sub>1</sub>
                        </label>
                        {VecTable("vec_q1")}
                    </div>
                    <div className="flex flex-col w-full">
                        <label className="text-lg font-medium my-3">
                            q<sub>2</sub>
                        </label>
                        {VecTable("vec_q2")}
                    </div>
                    <div className="flex flex-col w-full">
                        <label className="text-lg font-medium my-3">
                            q<sub>3</sub>
                        </label>
                        {VecTable("vec_q3")}
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <label className="text-2xl font-bold">Detailed Solution</label>
                <p className="my-5 leading-loose" id="answer"></p>
            </div>
        </div>
    );
};

export default App;
