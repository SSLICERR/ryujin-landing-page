import React, { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import axios from "axios";

const GITHUB_API_BASE_URL = "https://api.github.com/repos/SSLICERR/ryijun-landing-page";
const GITHUB_ACCESS_TOKEN = "";

export const CommitStats = () => {
  const [repoStats, setRepoStats] = useState({
    commits: 0,
    linesOfCode: 0,
    timeWorked: "",
  });

  useEffect(() => {
    const fetchRepoStats = async () => {
      try {
        let page = 1;
        let allCommits: any[] = [];
        let commitsResponse;

        // Fetch all commits with pagination
        do {
          commitsResponse = await axios.get(`${GITHUB_API_BASE_URL}/commits`, {
            params: { per_page: 100, page },
            headers: {
              Authorization: `token ${GITHUB_ACCESS_TOKEN}`,
            },
          });

          allCommits = allCommits.concat(commitsResponse.data);
          page++;
        } while (commitsResponse.data.length > 0);

        const totalCommits = allCommits.length;

        let additions = 0;
        let deletions = 0;
        let firstCommitDate: Date | undefined = undefined;
        let lastCommitDate: Date | undefined = undefined;

        for (const commit of allCommits) {
          const commitResponse = await axios.get(commit.url, {
            headers: {
              Authorization: `token ${GITHUB_ACCESS_TOKEN}`,
            },
          });
          const { stats, commit: commitData } = commitResponse.data;

          additions += stats.additions;
          deletions += stats.deletions;

          const commitDate = new Date(commitData.author.date);
          if (!firstCommitDate || commitDate < firstCommitDate) {
            firstCommitDate = commitDate;
          }
          if (!lastCommitDate || commitDate > lastCommitDate) {
            lastCommitDate = commitDate;
          }
        }

        const timeWorked =
          lastCommitDate && firstCommitDate
            ? Math.round(
                (lastCommitDate.getTime() - firstCommitDate.getTime()) /
                  (1000 * 60 * 60 * 24)
              ) + " days"
            : "N/A";

        setRepoStats({
          commits: totalCommits,
          linesOfCode: additions + deletions,
          timeWorked,
        });
      } catch (error) {
        console.error("Error fetching repo stats:", error);
      }
    };

    fetchRepoStats();
  }, []);

  return (
    <div className="mx-auto max-w-3xl px-4 py-20 md:py-24">
      <div className="flex flex-col items-center justify-center sm:flex-row">
        <Stat num={repoStats.commits} suffix="" subheading="Commits" />
        <div className="h-[1px] w-12 bg-indigo-200 sm:h-12 sm:w-[1px]" />
        <Stat
          num={repoStats.linesOfCode}
          suffix=""
          subheading="Lines of Code"
        />
        <div className="h-[1px] w-12 bg-indigo-200 sm:h-12 sm:w-[1px]" />
        <Stat
          num={parseInt(repoStats.timeWorked)}
          suffix=""
          subheading="days"
        />
      </div>
    </div>
  );
};

interface Props {
  num: number;
  suffix: string;
  decimals?: number;
  subheading: string;
}

const Stat = ({ num, suffix, decimals = 0, subheading }: Props) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (!isInView) return;

    animate(0, num, {
      duration: 2.5,
      onUpdate(value) {
        if (!ref.current) return;

        ref.current.textContent = value.toFixed(decimals);
      },
    });
  }, [num, decimals, isInView]);

  return (
    <div className="flex w-72 flex-col items-center py-8 sm:py-0">
      <p className="mb-2 text-center text-7xl  sm:text-6xl font-clashB text-mywhite">
        <span ref={ref}></span>
        {suffix}
      </p>
      <p className="max-w-48 text-center text-neutral-600 font-clashB text-mywhite">{subheading}</p>
    </div>
  );
};

export default CommitStats;