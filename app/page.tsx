import { ArrowLeft, Search, Bell, Edit, Bookmark, Calendar, User, Menu, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function DMTDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200 px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="p-1">
              <Menu className="h-4 w-4 text-gray-600" />
            </Button>
            <span className="text-gray-700 text-sm font-medium">Nest</span>
            <div className="flex items-center space-x-1">
              <Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-3 py-1.5 rounded-full text-sm font-medium h-7">
                My Workspace
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-700 px-3 py-1.5 rounded-full bg-gray-100 hover:bg-gray-200 h-7 text-sm"
              >
                Manager Hub
              </Button>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input placeholder="search" className="pl-10 w-64 bg-gray-50 border-gray-200 h-8 text-sm" />
            </div>

            <div className="flex items-center space-x-2">
              <div className="relative">
                <Bell className="h-4 w-4 text-gray-600" />
                <Badge className="absolute -top-1.5 -right-1.5 bg-green-500 text-white text-xs px-1 min-w-[16px] h-3.5 rounded-full flex items-center justify-center font-medium text-[10px]">
                  2
                </Badge>
              </div>
              <Edit className="h-4 w-4 text-gray-600" />
              <Bookmark className="h-4 w-4 text-gray-600" />
              <Calendar className="h-4 w-4 text-gray-600" />
              <div className="relative">
                <User className="h-4 w-4 text-gray-600" />
                <Badge className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-xs px-1 min-w-[16px] h-3.5 rounded-full flex items-center justify-center font-medium text-[10px]">
                  2
                </Badge>
              </div>

              <div className="flex items-center space-x-2 ml-3 pl-3 border-l border-gray-200">
                <Avatar className="h-7 w-7">
                  <AvatarImage src="/professional-headshot.png" />
                  <AvatarFallback>IK</AvatarFallback>
                </Avatar>
                <div className="text-xs">
                  <div className="font-semibold text-gray-900">Isha Kumar</div>
                  <div className="text-gray-500">Sr. Developer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 py-2 text-sm text-gray-600 bg-white border-b border-gray-100">
        My Workspace &gt; DMT Datapoint Allocation
      </div>

      <div className="px-4 py-3">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="p-1">
              <ArrowLeft className="h-4 w-4 text-gray-600" />
            </Button>
            <h1 className="text-lg font-semibold text-gray-900">DMT Datapoint Allocation - Employee Initiate</h1>
          </div>
          <Button variant="ghost" size="sm" className="p-1">
            <Image src="/clock-icon.png" alt="Clock" width={16} height={16} />
          </Button>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-4 mb-4">
          <div className="flex items-start space-x-3">
            <div className="relative">
              <Avatar className="h-10 w-10">
                <AvatarImage src="/professional-male-headshot.jpg" />
                <AvatarFallback>MK</AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>

            <div className="flex-1">
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div className="text-sm font-semibold text-gray-900 mb-0.5">Manoj Kandan M</div>
                  <div className="text-xs text-gray-600 mb-1">● Gen ID: 25504878</div>
                  <div className="text-xs text-blue-600">Manoj.kandan@partner.samsung.com</div>
                </div>

                <div>
                  <div className="text-xs text-gray-600 mb-0.5">Designation</div>
                  <div className="text-xs font-medium text-gray-900 mb-2">Outsourcing</div>
                  <div className="text-xs text-gray-600 mb-0.5">Division</div>
                  <div className="text-xs font-medium text-gray-900">
                    Tech Strategy Team\Smart Infra Group\Information System & AI Tools
                  </div>
                </div>

                <div>
                  <div className="text-xs text-gray-600 mb-0.5">Manager</div>
                  <div className="text-xs font-medium text-gray-900">Ravindra S R (06786669)</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-4 h-4 bg-green-100 rounded flex items-center justify-center">
              <Image src="/clipboard-icon.png" alt="Clipboard" width={12} height={12} />
            </div>
            <h2 className="text-sm font-semibold text-gray-900">Required Information</h2>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-4">DMT - Data Allocation</h3>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Team <span className="text-red-500">*</span>
                </label>
                <Select defaultValue="ad-platform">
                  <SelectTrigger className="w-full h-9">
                    <SelectValue placeholder="Select team" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ad-platform">Ad Platform Team</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Quarter <span className="text-red-500">*</span>
                </label>
                <Select defaultValue="q1">
                  <SelectTrigger className="w-full h-9">
                    <SelectValue placeholder="Select quarter" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="q1">Q1</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  DC Points <span className="text-red-500">*</span>
                </label>
                <Input type="number" defaultValue="1000" className="w-full h-9" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  DA Points <span className="text-red-500">*</span>
                </label>
                <Input type="number" defaultValue="1200" className="w-full h-9" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Budget <span className="text-red-500">*</span>
                </label>
                <Select defaultValue="srib">
                  <SelectTrigger className="w-full h-9">
                    <SelectValue placeholder="Select budget" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="srib">SRIB</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">Comment (Max 500 Chars)</label>
              <Textarea placeholder="xxx-xxx-xx-xxx-x" className="w-full h-16 resize-none text-sm" maxLength={500} />
            </div>

            <div className="flex justify-end">
              <Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 text-sm font-medium">Submit</Button>
            </div>
          </div>
        </div>

        <div className="py-4">
          <div className="flex justify-between items-center">
            <Button variant="link" className="text-gray-600 p-0 h-auto font-normal flex items-center space-x-1 text-sm">
              <FileText className="w-3 h-3" />
              <span>View Policies</span>
            </Button>
            <span className="text-gray-600 text-sm">Action</span>
          </div>
        </div>
      </div>
    </div>
  )
}
