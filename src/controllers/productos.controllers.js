import getConnection from "../db/database.js"; // Corregido el nombre de la función

const getProductos = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query(
            "SELECT ProductoID, ProductoNombre, ProveedorID, CategoriaID, CantidadPorUnidad, UnidadesStock, UnidadesPedidas, NivelReorden, Discontinuado, PrecioUnitario FROM productos"
        );
        res.json(result);
    } catch (error) {
        console.error("Error 500:", error);
        res.status(500).json({ message: "Ocurrió un error en el servidor." });
    }
};

const putProducto = async (req, res) => {
    try {
        const { id } = req.params;
        const {
            ProductoNombre, ProveedorID, CategoriaID, CantidadPorUnidad,
            UnidadesStock, UnidadesPedidas, NivelReorden, Discontinuado, PrecioUnitario
        } = req.body;

        const producto = {
            ProductoNombre, ProveedorID, CategoriaID, CantidadPorUnidad,
            UnidadesStock, UnidadesPedidas, NivelReorden, Discontinuado, PrecioUnitario
        };

        const connection = await getConnection();
        const result = await connection.query("UPDATE productos SET ? WHERE ProductoID = ?", [producto, id]);
        res.json(result);
    } catch (error) {
        console.error("Error 500:", error);
        res.status(500).json({ message: "Ocurrió un error en el servidor." });
    }
};

export const methodHTTP = {
    getProductos,
    putProducto
};
