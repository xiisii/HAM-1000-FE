"use client";

import { useEffect, useRef } from "react";
import { useAuth } from "src/hooks/use-auth";
import { Layout as DashboardLayout } from "src/layouts/dashboard";
import type { Page as PageType } from "src/types/page";
import { Loader } from "@googlemaps/js-api-loader";
import { Zoom } from "@mui/material";
import BackgroundDashboard from "public/image/QDAT-BackGound.jpg";
import { Grid } from "@mui/material";
import Image from "next/image";
import StudentInfo from "public/image/QDAT-TQUAT.jpg";
import LogoHCMUTE from "public/image/QDAT-HBU.jpg";

const Page: PageType = () => {
  return (
    <div className="w-auto md:h-[1600px] lg:h-screen  h-screen pb-2 overflow-y-auto">
      <Grid>
        {/* Hàng 1 */}
        <Grid container item xs={12}>
          {/* Cột 1 */}
          <Grid item xs={12} sm={6}>
            <div className="rounded-lg overflow-hidden  h-full">
              <div className="bg-white p-6">
                <div className="relative flex flex-col items-center justify-center h-auto bg-white">
                  <div className="text-center">
                    <h1 className="text-xs font-bold">
                      BỘ GIÁO DỤC VÀ ĐÀO TẠO
                    </h1>
                    <h1 className="text-xs font-bold">
                      TRƯỜNG ĐẠI HỌC QUỐC TẾ HỒNG BÀNG
                    </h1>
                    <h1 className="text-xs font-bold">KHOA CÔNG NGHỆ - KỸ THUẬT</h1>
                    <h1 className="text-xs font-bold">
                      NGÀNH CÔNG NGHỆ THÔNG TIN
                    </h1>
                  </div>

                  <div className="my-8">
                    <Image
                      src={LogoHCMUTE}
                      alt="HCMUTE Logo"
                      width={300}
                      height={50}
                    />
                  </div>

                  <div className="text-center mt">
                    <h2 className="text-x font-bold">ĐỒ ÁN TỐT NGHIỆP ĐẠI HỌC</h2>

                    <h3 className="mt-1 text-xl font-bold">
                      ỨNG DỤNG HỖ TRỢ PHÁT HIỆN UNG THƯ DA
                    </h3>
                  </div>
                  <br />
                  <table className="text-right mt-1">
                    <tbody>
                      <tr>
                        <td className="text-left font-semibold text-xs">
                          GVHD:&nbsp;&nbsp;&nbsp; ThS. LÊ VĂN HẠNH 
                        </td>
                      </tr>
                      <tr>
                        <td className="text-left font-semibold text-xs">
                          SVTH:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PHẠM QUỐC ĐẠT 
                        </td>
                      </tr>
                      <tr>
                        <td className="text-left font-semibold text-xs">
                          MSSV:&nbsp;&nbsp;&nbsp;&nbsp;2111111172 
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </Grid>
          {/* Cột 2 */}
          <Grid item xs={12} sm={6}>
            <div className=" overflow-hidden flex justify-center items-center">
              <div className="bg-white">
                <Image
                  src={BackgroundDashboard}
                  alt="Image 1"
                  className="w-auto"
                />{" "}
              </div>
            </div>
          </Grid>
        </Grid>

        {/* Hàng 2 */}
        <Grid container item xs={12}>
          {/* Cột 3 */}
          <Grid item xs={12} sm={6}>
            <div className="rounded-lg overflow-hidden ">
              <div className="bg-white">
                {/* Your content */}
                <Image src={StudentInfo} alt="Image 3" className="w-auto" />
              </div>
            </div>
          </Grid>
          {/* Cột 4 */}
          <Grid item xs={12} sm={6}>
            <div className="rounded-lg overflow-hidden h-auto">
              <div className="bg-white p-6">
                <div className="relative flex flex-col items-center justify-center h-auto">
                  <h6 className="mt-4 text-x font-normal text-justify">
                    &quot;
                    <strong>
                      Ứng dụng hỗ trợ phát hiện ung thư da
                    </strong>
                    &quot; là một giải pháp sử dụng công nghệ trí tuệ nhân tạo nhằm hỗ trợ người dùng trong 
                    việc phát hiện sớm các dấu hiệu của ung thư da thông qua hình ảnh tổn thương. 
                    Mục tiêu chính của hệ thống là cung cấp một công cụ trực quan, dễ sử dụng, 
                    giúp người dùng kiểm tra nhanh các tổn thương trên da và nhận được gợi ý chẩn đoán ban đầu, 
                    từ đó nâng cao khả năng phát hiện bệnh sớm và chủ động hơn trong việc thăm khám y tế.
                    <br />
                    <br />
                    Hệ thống được xây dựng dựa trên mô hình học sâu (Deep Learning), cụ thể là mạng nơ-ron tích chập (CNN), 
                    đã được huấn luyện trên tập dữ liệu hình ảnh y tế HAM10000. Người dùng chỉ cần tải lên ảnh vùng da nghi ngờ, 
                    hệ thống sẽ xử lý, phân tích và đưa ra dự đoán về loại tổn thương kèm theo mức độ tin cậy. 
                    Ứng dụng hỗ trợ phân loại các tổn thương thành 7 nhóm phổ biến, bao gồm cả các dạng ung thư da nguy hiểm như u hắc tố (melanoma).
                  </h6>
                </div>
                {/* Your content */}
              </div>
            </div>
          </Grid>
        </Grid>
        {/* <div className="h-2 w-12">{""}</div> */}
      </Grid>
    </div>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
