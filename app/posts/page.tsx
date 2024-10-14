import CardList from "../components/post/CardList";
import ViewUserButton from "../components/post/ViewUserButton";
import motor from "../../public/data/motor.json"

interface IMotor {
    id: number;
    namaMotor: string;
    tahunKeluaran: number;
    warna: string;
    lokasi: {
        alamat: string;
        kota: string;
        kecamatan: string;
        kodePos: string;
    };
    harga: {
        biaya: number;
    };
}

// Mengasumsikan struktur data motor yang diimpor
const posts = () => {
    const motors: IMotor[] = motor.motor; // Akses array objek motor
    
    return (
        <>
            <p>{new Date().toLocaleTimeString()}</p>
            <h1 className="text-fuchsia-500">DAFTAR MOTOR</h1>
            {motors.map((motor) => {
                return (
                    <CardList key={motor.id}>
                        <p>ID: {motor.id}</p>
                        <i>Nama Motor: {motor.namaMotor}</i>
                        <p>Tahun Keluaran: {motor.tahunKeluaran}</p>
                        <p>Warna: {motor.warna}</p>
                        <p>Lokasi: {motor.lokasi.alamat}, {motor.lokasi.kota}, {motor.lokasi.kecamatan}, {motor.lokasi.kodePos}</p>
                        <p>Harga: {motor.harga.biaya.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</p>
                        <ViewUserButton userId={motor.id} /> 
                    </CardList>
                );
            })}
        </>
    );
};

export default posts;
