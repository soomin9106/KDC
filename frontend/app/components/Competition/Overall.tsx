import { TableCell, TableRow, TableBody, Table } from "@/components/ui/table"

const Overall = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center space-y-10 h-screen py-16 px-[16px] bg-accent/50">
            <div className="flex flex-col space-y-5">
                <div className="text-3xl font-bold text-center">Overall Information</div>
            </div>
            <div className="max-w-4xl mx-auto my-8 p-6 bg-white shadow-md rounded-lg">
                <div className="mb-6">
                    <h3 className="font-semibold mb-2">Participant Age Group: 8 - 18 Years Old</h3>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-medium">8∼9</TableCell>
                                <TableCell>PRIMARY 1</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">10∼12</TableCell>
                                <TableCell>PRIMARY 2</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">13∼15</TableCell>
                                <TableCell>JUNIOR</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">16∼18</TableCell>
                                <TableCell>SENIOR</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
                <div className="mb-6">
                    <h3 className="font-semibold mb-2">Nationality - Open Globally</h3>
                    <p>Vietnam, Korea, Japan, China, Hong Kong, Malaysia, Singapore, Indonesia, Philippines, etc.</p>
                </div>
                <div className="mb-6">
                    <h3 className="font-semibold mb-2">Benefits</h3>
                    <ul className="list-disc pl-6">
                        <li>Prize Money - 1st/2nd/3rd Place per each Classification</li>
                        <li>Scholarships from Renowned School / Company (Korea, Hong Kong, Singapore, Philippines, etc.)</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold mb-2">Jury / Masters</h3>
                    <p>from Korea, Singapore, Malaysia</p>
                </div>
            </div>
        </div>
    )
}

export default Overall