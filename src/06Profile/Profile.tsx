import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import { useState } from 'react'

const Profile = () => {
    const [name, setName] = useState<string>('')
    const [birthday, setBirthday] = useState<String>()
    const [tel, setTel] = useState<string>()
    const [profileImage, setProfileImage] = useState<
        string | undefined | null | ArrayBuffer
    >('')
    const handleUploadImage = (e: any) => {
        const files = e.target.files
        if (files.length > 0) {
            const file = files[0]
            const reader = new FileReader()
            reader.onload = (e) => {
                setProfileImage(e.target?.result)
            }
            reader.readAsDataURL(file)
        } else {
            setProfileImage('')
        }
    }
    const pdhDownloadHandler = () => {
        // PDFファイルに変換したいコンポーネントのidを検索してDOM要素を取得する
        const target = document.getElementById('pdf-id')
        if (target === null) return

        html2canvas(target, { scale: 2.5 }).then((canvas) => {
            const imgData = canvas.toDataURL('image/svg', 1.0)
            let pdf = new jsPDF()
            pdf.addImage(
                imgData,
                'SVG',
                5,
                10,
                canvas.width / 18,
                canvas.height / 18,
            )
            pdf.save(`test.pdf`)
        })
    }
    return (
        <>
            <section className="mx-24">
                {/* ヘッダー */}
                <div className="text-center my-4">
                    <h1 className="text-2xl font-bold">プロフィール自動生成</h1>
                </div>
                <div className="grid grid-cols-2 gap-3">
                    {/* 左のプロフィール */}
                    <div
                        id="pdf-id"
                        className="text-center h-full w-full flex-col shadow row-span-5"
                    >
                        <h1 className="font-bold">プロフィール</h1>
                        <div className="rounded-full w-auto h-auto bg-gray-200">
                            <img
                                className="rounded-full bg-cover bg-center"
                                src={profileImage}
                                alt="profile"
                            />
                        </div>
                        <h2>{name}</h2>
                        <p>{birthday}</p>
                        <p>{tel}</p>
                    </div>
                    {/* 右の入力フォーム */}
                    <div>
                        <p className="text-gray-500">お名前</p>
                        <input
                            type="text"
                            onChange={(e) => setName(e.target.value)}
                            className="text-base border-gray-300 border-2 rounded w-full"
                        />
                    </div>
                    <div>
                        <p className="text-gray-500">お誕生日</p>
                        <input
                            type="date"
                            onChange={(e) => setBirthday(e.target.value)}
                            className="border-gray-300 border-2 rounded w-full"
                        />
                    </div>
                    <div>
                        <p className="text-gray-500">電話番号</p>
                        <input
                            type="text"
                            onChange={(e) => setTel(e.target.value)}
                            className="border-gray-300 border-2 rounded w-full"
                        />
                    </div>
                    <div>
                        <p className="text-gray-500">プロフィール写真</p>
                        <input
                            type="file"
                            onInput={handleUploadImage}
                            className="border-gray-300 border-2 rounded block w-full text-sm text-slate-500
                                file:mr-4 file:py-2 file:px-4
                                file:rounded-full file:border-0
                                file:text-sm file:font-semibold
                                file:bg-violet-50 file:text-violet-700
                                hover:file:bg-violet-100"
                        />
                    </div>
                    <div className="pt-3">
                        <button
                            onClick={pdhDownloadHandler}
                            className="bg-teal-400 p-1 px-3 rounded text-white hover:bg-teal-300 duration-300 w-full"
                        >
                            Download as PNG
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Profile
