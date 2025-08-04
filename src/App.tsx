import { useDataQuery } from '@dhis2/app-runtime'
import i18n from '@dhis2/d2-i18n'
import React, { FC, useEffect, useState } from 'react'
import { DataTable, DataTableCell, DataTableColumnHeader, DataTableRow, TableBody, TableFoot, TableHead } from "@dhis2/ui";
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './App.module.css'

interface QueryResults {
    me: {
        name: string
    }
}

const query = {
    me: {
        resource: 'me',
    },
}

const MyApp: FC = () => {
    //useState
    const [title, setTitle] = useState("My App")
    const [columnName, setColumnName] = useState("Onyekachukwu")

    //useEffect

    useEffect(() => {
        if (title === "Edson") {
            setColumnName("Alendro")
        }
    }, [title])

    //state management --- recoil



    const { error, loading, data } = useDataQuery<QueryResults>(query)

    if (error) {
        return <span>{i18n.t('ERROR')}</span>
    }

    if (loading) {
        return <span>{i18n.t('Loading...')}</span>
    }

    return (
        <div className="container p-5">
            <h3 className='mt-2'>{title}</h3>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            <DataTable>
                <TableHead>
                    <DataTableRow>
                        <DataTableColumnHeader>
                            First name
                        </DataTableColumnHeader>
                        <DataTableColumnHeader>
                            Last name
                        </DataTableColumnHeader>
                        <DataTableColumnHeader>
                            Incident date
                        </DataTableColumnHeader>
                        <DataTableColumnHeader>
                            Last updated
                        </DataTableColumnHeader>
                    </DataTableRow>
                </TableHead>
                <TableBody>
                    <DataTableRow>
                        <DataTableCell>
                            {columnName}
                        </DataTableCell>
                        <DataTableCell>
                            Kariuki
                        </DataTableCell>
                        <DataTableCell>
                            02/06/2007
                        </DataTableCell>
                        <DataTableCell>
                            05/25/1972
                        </DataTableCell>
                    </DataTableRow>
                    <DataTableRow>
                        <DataTableCell>
                            Kwasi
                        </DataTableCell>
                        <DataTableCell>
                            Okafor
                        </DataTableCell>
                        <DataTableCell>
                            08/11/2010
                        </DataTableCell>
                        <DataTableCell>
                            02/26/1991
                        </DataTableCell>
                    </DataTableRow>
                    <DataTableRow>
                        <DataTableCell>
                            Siyabonga
                        </DataTableCell>
                        <DataTableCell>
                            Abiodun
                        </DataTableCell>
                        <DataTableCell>
                            07/21/1981
                        </DataTableCell>
                        <DataTableCell>
                            02/06/2007
                        </DataTableCell>
                    </DataTableRow>
                </TableBody>
            </DataTable>
        </div>
    )
}

export default MyApp
