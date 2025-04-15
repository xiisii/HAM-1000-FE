import React, { useEffect, useState } from "react";
import { useAuth } from "src/hooks/use-auth";
import type { Page as PageType } from "src/types/page";
import Image from "next/image";
import HeaderTitle from "src/components/ui/HeaderTitle";
import { useRouter } from "next/router";
import { paths } from "src/paths";
import { IssuerGuard } from "src/guards/issuer-guard";
import { GuestGuard } from "src/guards/guest-guard";
import { Issuer } from "src/utils/auth";
import { FaArrowLeftLong } from "react-icons/fa6";
import { BsFillSendArrowDownFill } from "react-icons/bs";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Layout as DashboardLayout } from "src/layouts/dashboard";

const Page: PageType = () => {
  const router = useRouter();
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [register, setRegister] = useState<boolean>(false);
  const [showBackText, setShowBackText] = useState<boolean>(false);
  const [showSendText, setShowSendText] = useState<boolean>(false);

  const handleGoBack = () => {
    console.log("Quay lại");
    router.replace(paths.index);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCapturedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetCapture = () => {
    setRegister(false);
    setCapturedImage(null);
  };

  const handleRegister = () => {
    setRegister(!register);
  };

  useEffect(() => {
    toast.warn("Bạn cần tải ảnh lên");
  }, []);

  return (
    <div className="relative w-auto md:h-screen lg:h-screen h-screen pb-2 overflow-y-auto flex flex-col justify-center items-center">
      <h1 className="absolute top-10 left-0 w-full text-center text-[80px] text-[#3a84ee]">PHÁT HIỆN UNG THƯ DA</h1>

      <ToastContainer autoClose={2000} position="top-center" className="mt-[220px]" />
      
      <div className="relative flex flex-row flex-wrap lg:my-16 md:my-0 md:mx-4 lg:mx-0 justify-center">
        <div className="w-[100px] md:w-1/2 lg:w-1/2 xl:w-1/22 mb-4 md:mb-0 mx-4">
          <div className="card-body w-[100px] md:w-auto lg:-w-[100px]">
            {capturedImage ? (
              <div className="relative">
                <img src={capturedImage} className="max-w-md max-h-96" />
                <button
                  className="absolute top-4 right-4 bg-white text-red-500 rounded-full p-2"
                  onClick={handleResetCapture}
                  onMouseEnter={() => setShowBackText(true)}
                  onMouseLeave={() => setShowBackText(false)}
                >
                  <FaArrowLeftLong />
                </button>
                {showBackText && (
                  <div className="absolute top-4 right-16 bg-white text-red-500 rounded p-2 text-xs">
                    Quay lại
                  </div>
                )}
                <button
                  className="absolute top-16 right-4 bg-white text-red-500 rounded-full p-2"
                  onClick={handleRegister}
                  onMouseEnter={() => setShowSendText(true)}
                  onMouseLeave={() => setShowSendText(false)}
                >
                  <BsFillSendArrowDownFill />
                </button>
                {showSendText && (
                  <div className="absolute top-16 right-16 bg-white text-red-500 rounded p-2 text-xs">
                    Xác thực
                  </div>
                )}
              </div>
            ) : (
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="border-2 border-dashed border-gray-400 p-4 rounded w-full"
              />
            )}
          </div>
        </div>

        {/* Hiển thị card thông tin xác thực người dùng bên phải */}
        {!register ? (
          <div className="flex w-[700px] h-[200px] md:w-1/2 lg:w-1/2 self-start -mx-4">
            <div className="card bg-base-100 shadow-xl flex flex-col h-auto overflow-hidden">
              <div className="card-body  md:w-auto lg:w-[700px] md:h-auto">
                <h2 className="card-title">Hướng dẫn</h2>
                <p className="text-xl md:text-lg lg:text-xl whitespace-normal">
                  <strong>Bước 1</strong>: Tải ảnh lên từ thiết bị của bạn
                </p>
                <p className="text-xl md:text-lg lg:text-xl whitespace-normal">
                  <strong>Bước 2</strong>: Nhấn nút gửi để xác nhận gửi ảnh
                </p>
                <p className="text-xl md:text-lg lg:text-xl whitespace-normal">
                  <strong>Bước 3</strong>: Kiểm tra kết quả phát hiện ung thư da
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex w-[800px] h-[280px] md:w-1/2 lg:w-1/2 self-start -mx-4">
            <div className="card bg-base-100 shadow-xl flex flex-col h-auto space-y-0 overflow-hidden">
              <div className="card-body md:w-auto lg:w-[700px] md:h-auto">
                <h2 className="card-title text-2xl text-orange-500 md:text-lg lg:text-2xl">
                  Kết quả phát hiện ung thư da
                </h2>
                <p className="text-xl md:text-lg lg:text-xl">
                  <strong>Kết quả</strong>: Ung thư ác tính
                </p>
                <p className="text-xl md:text-lg lg:text-xl">
                  <strong>Phân loại</strong>: Actinic keratoses và intraepithelial carcinomae <br />(tổn thương tiền ung thư)
                </p>
                <p className="text-xl md:text-lg lg:text-xl">
                  <strong>Lời khuyên</strong>: Tổn thương này có khả năng tiến triển thành <br />
                  ung thư da. Bạn nên đến cơ sở y tế chuyên khoa da liễu để  <br />
                  kiểm tra chuyên sâu và điều trị sớm nếu cần.
                </p>
                {/* <p className="text-xl md:text-lg lg:text-xl">
                  Trạng thái: <strong>None</strong>
                </p>
                <p className="text-xl text-red-500 md:text-lg lg:text-xl">
                  <strong>Điểm danh lên xe KHÔNG thành công</strong>
                </p> */}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;