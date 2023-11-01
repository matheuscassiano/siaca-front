import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useEffect, useState } from "react";

export default function TimeTable({ offers }: any) {
  const [loading, setLoading] = useState(true);
  const [rows, setRows] = useState<any[]>([]);

  useEffect(() => setTableOffers(offers), [offers]);

  function setTableOffers(_offers: any[]) {
    const shifts: string[] = [];
    _offers.forEach((offer) => {
      if (!shifts.includes(offer.aula_hora_fim)) {
        shifts.push(offer.aula_hora_fim);
      }

      if (!shifts.includes(offer.aula_hora_inicio)) {
        shifts.push(offer.aula_hora_inicio);
      }
    });

    const table = shifts.sort().map((shift) => {
      const offersByShift = _offers.filter(
        (_offer) =>
          _offer.aula_hora_inicio === shift || _offer.aula_hora_fim === shift
      );

      const res: any[] = offersByShift.map((_offer) => {
        const days: string[] = _offer.aula_dias.split("");
        return days.map((day) => ({ shift, day, offer: _offer }));
      });

      const concatened = [].concat(...res);

      return {
        shift,
        0: concatened.find((r: any) => r.day === "0"),
        1: concatened.find((r: any) => r.day === "1"),
        2: concatened.find((r: any) => r.day === "2"),
        3: concatened.find((r: any) => r.day === "3"),
        4: concatened.find((r: any) => r.day === "4"),
        5: concatened.find((r: any) => r.day === "5"),
        6: concatened.find((r: any) => r.day === "6"),
      };
    });
    setRows(table);
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Horario</TableCell>
            <TableCell>Domingo</TableCell>
            <TableCell>Segunda</TableCell>
            <TableCell>Terça</TableCell>
            <TableCell>Quarta</TableCell>
            <TableCell>Quinta</TableCell>
            <TableCell>Sexta</TableCell>
            <TableCell>Sábado</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.shift}>
              <TableCell>{row.shift}</TableCell>
              <TableCell>{row[0]?.offer?.disciplina_nome}</TableCell>
              <TableCell>{row[1]?.offer?.disciplina_nome}</TableCell>
              <TableCell>{row[2]?.offer?.disciplina_nome}</TableCell>
              <TableCell>{row[3]?.offer?.disciplina_nome}</TableCell>
              <TableCell>{row[4]?.offer?.disciplina_nome}</TableCell>
              <TableCell>{row[5]?.offer?.disciplina_nome}</TableCell>
              <TableCell>{row[6]?.offer?.disciplina_nome}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
