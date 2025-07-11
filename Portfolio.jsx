
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-6 md:p-12">
      <header className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
        <div className="flex items-center gap-4">
          <img src="/Shubham_Photo.jpg" alt="Shubham Mishra" className="w-32 h-32 rounded-full object-cover border shadow" />
          <div>
            <h1 className="text-3xl font-bold">Shubham Mishra</h1>
            <p className="text-gray-600">Senior Database Developer</p>
            <a href="mailto:shubhamforlife.1@gmail.com" className="text-blue-500 underline">shubhamforlife.1@gmail.com</a>
          </div>
        </div>
        <Button asChild>
          <a href="/Resume.pdf" download>Download Resume</a>
        </Button>
      </header>

      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Summary</h2>
            <p>
              4+ years in database development (Oracle PL/SQL, PostgreSQL) with expertise in data integration using SSIS, Apache NiFi, AWS DMS, and Power BI. Proven record in performance tuning, data migration, and building scalable enterprise solutions.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Skills</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Oracle PLSQL / PostgreSQL</li>
              <li>SSIS, Apache NiFi, Power BI</li>
              <li>AWS DMS, RDS</li>
              <li>SQL Developer, DBeaver, SSMS</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Experience</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold">Senior Database Developer, Protiviti</h3>
                <p className="text-sm text-gray-600">Dec 2024 – Present</p>
                <ul className="list-disc list-inside ml-4">
                  <li>Migrated databases from on-prem SQL Server to PostgreSQL via AWS DMS.</li>
                  <li>Developed ETL pipelines using Apache NiFi.</li>
                  <li>Optimized DB performance with partitioning and refactoring.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold">PL/SQL Developer, TCS</h3>
                <p className="text-sm text-gray-600">Sep 2022 – Dec 2024</p>
                <ul className="list-disc list-inside ml-4">
                  <li>Designed optimized stored procedures and triggers.</li>
                  <li>Ensured performance via indexing and schema refinement.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold">Software Engineer, Capgemini</h3>
                <p className="text-sm text-gray-600">Sep 2020 – Aug 2022</p>
                <ul className="list-disc list-inside ml-4">
                  <li>Led SSIS-based ETL projects and Azure database migrations.</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Projects</h2>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Authority Brands:</strong> Field service management solution across job scheduling, invoicing, and mobile tracking.</li>
              <li><strong>CBIC Risk System:</strong> Customs risk analysis platform for international trade.</li>
              <li><strong>BAYER (Xofigo):</strong> Pharmaceutical supply chain platform across 22 nations.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Oracle SQL & Tuning (Udemy)</li>
              <li>AZ-900 Microsoft Azure Fundamentals</li>
              <li>Syniti ADMM Workshop</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Education</h2>
            <ul className="list-disc list-inside">
              <li>MCA – PSIT, Kanpur (2017–2020)</li>
              <li>BCA – VSICS, Kanpur (2014–2017)</li>
            </ul>
          </CardContent>
        </Card>
      </motion.section>
    </div>
  );
}
