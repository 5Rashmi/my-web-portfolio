import { resumeData } from "../../datas/resume.data";
import Widget from "../../ui/widgets/Widget";

const Resume = () => {
  return (
    <Widget left="left-[86%]" top="top-[60%]">
      <div className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 backdrop-blur-lg rounded-lg shadow text-white max-w-md">
        <img
          src="/icons/refreshcl_by_tpdk/PNG/Office/distributor-report.png"
          alt="resume"
          className="w-8 h-8"
        />
        <div>
          <p className="text-sm">Resume</p>
          <a
            href={resumeData}
            download
            className="text-xs text-fuchsia-400 hover:underline"
          >
            Download
          </a>
        </div>
      </div>
    </Widget>
  );
};

export default Resume;
