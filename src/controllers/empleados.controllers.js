import getConnection from "../db/database.js"; // Asegúrate de que esta importación esté correcta

const getEmpleados = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT EmpleadoID, Apellido, Nombre, Titulo, TituloCortesia, FechaNacimiento, FechaContratacion, Direccion, Ciudad, Regiones, CodigoPostal, Pais, Telefono, Extension, Foto, Notas, Jefe, RutaFoto FROM empleados");
        res.json(result);
    } catch (error) {
        console.error("Error 500:", error);
        res.status(500).json({ message: "Ocurrió un error en el servidor." });
    }
};

// Solo exporta una vez
export const methodHTTP = {
    getEmpleados // Asegúrate de que no haya duplicación de exportación
};
