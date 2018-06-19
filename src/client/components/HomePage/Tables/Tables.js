import React, { Fragment } from 'react'

import {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableRowCell,
  TableBody
} from '@pearson-components/elements-sdk/build/dist.elements-sdk'

const Tables = () => (
  <Fragment>
    <h1>Tables</h1>
    <p>
      More:{' '}
      <a
        href="https://pearson-higher-ed.github.io/elements-sdk/#/table"
        rel="noopener noreferrer"
        target="_blank"
      >
        documentation
      </a>
    </p>
    <Table selectable sortable>
      <TableHead>
        <TableRow>
          <TableHeaderCell
            inputId="comic_select_0"
            containerId="comic_select"
            inputLabel="Select"
          />
          <TableHeaderCell columnSort={() => console.log('Hey')}>Comic</TableHeaderCell>
          <TableHeaderCell>Main characters</TableHeaderCell>
          <TableHeaderCell>Country</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableRowCell inputId="c1" containerId="comic_select" labelledbyCellId="sel_Spirou" />
          <TableRowCell cellId="sel_Spirou">Spirou</TableRowCell>
          <TableRowCell>Spirou, Fantasio</TableRowCell>
          <TableRowCell>Belgium</TableRowCell>
        </TableRow>
        <TableRow>
          <TableRowCell inputId="c2" containerId="comic_select" labelledbyCellId="sel_sew" />
          <TableRowCell cellId="sel_sew">Suske en Wiske</TableRowCell>
          <TableRowCell>Suske, Wiske, Tante Sidonia, Krimson</TableRowCell>
          <TableRowCell>Belgium</TableRowCell>
        </TableRow>
      </TableBody>
    </Table>
  </Fragment>
)

export default Tables
