import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Eye, Filter, Download } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface OrderItem {
  name: string;
  quantity: number;
  price: number;
}

interface Order {
  id: number;
  customerName: string;
  customerEmail: string;
  items: OrderItem[];
  total: number;
  status: 'pending' | 'processing' | 'completed' | 'cancelled';
  date: string;
  address: string;
  phone: string;
}

const AdminOrders = () => {
  const { toast } = useToast();
  
  const [orders, setOrders] = useState<Order[]>([
    {
      id: 1001,
      customerName: "John Doe",
      customerEmail: "john@example.com",
      items: [
        { name: "Chocolate Cupcake", quantity: 2, price: 4.99 },
        { name: "Fluffy Pancakes", quantity: 1, price: 8.99 }
      ],
      total: 18.97,
      status: "completed",
      date: "2024-01-15",
      address: "123 Main St, Anytown, USA",
      phone: "+1 (555) 123-4567"
    },
    {
      id: 1002,
      customerName: "Jane Smith",
      customerEmail: "jane@example.com",
      items: [
        { name: "Red Velvet Cake", quantity: 1, price: 24.99 }
      ],
      total: 24.99,
      status: "processing",
      date: "2024-01-16",
      address: "456 Oak Ave, Springfield, USA",
      phone: "+1 (555) 987-6543"
    },
    {
      id: 1003,
      customerName: "Mike Johnson",
      customerEmail: "mike@example.com",
      items: [
        { name: "Chocolate Cupcake", quantity: 4, price: 4.99 },
        { name: "Fluffy Pancakes", quantity: 2, price: 8.99 }
      ],
      total: 37.94,
      status: "pending",
      date: "2024-01-17",
      address: "789 Pine Rd, Riverside, USA",
      phone: "+1 (555) 456-7890"
    },
    {
      id: 1004,
      customerName: "Sarah Wilson",
      customerEmail: "sarah@example.com",
      items: [
        { name: "French Toast", quantity: 2, price: 9.99 },
        { name: "Berry Waffles", quantity: 1, price: 10.99 }
      ],
      total: 30.97,
      status: "completed",
      date: "2024-01-18",
      address: "321 Elm St, Lakewood, USA",
      phone: "+1 (555) 234-5678"
    },
    {
      id: 1005,
      customerName: "David Brown",
      customerEmail: "david@example.com",
      items: [
        { name: "Red Velvet Cake", quantity: 2, price: 24.99 }
      ],
      total: 49.98,
      status: "cancelled",
      date: "2024-01-19",
      address: "654 Maple Dr, Hillside, USA",
      phone: "+1 (555) 345-6789"
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  const handleStatusChange = (orderId: number, newStatus: string) => {
    setOrders(orders.map(order => 
      order.id === orderId 
        ? { ...order, status: newStatus as Order['status'] }
        : order
    ));
    
    toast({
      title: "Status Updated",
      description: `Order #${orderId} status changed to ${newStatus}`
    });
  };

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case 'completed': return 'default';
      case 'processing': return 'secondary';
      case 'pending': return 'outline';
      case 'cancelled': return 'destructive';
      default: return 'outline';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-700 bg-green-100';
      case 'processing': return 'text-blue-700 bg-blue-100';
      case 'pending': return 'text-yellow-700 bg-yellow-100';
      case 'cancelled': return 'text-red-700 bg-red-100';
      default: return 'text-gray-700 bg-gray-100';
    }
  };

  const filteredOrders = orders.filter(order => {
    const matchesSearch = 
      order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customerEmail.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.id.toString().includes(searchTerm);
    
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const orderStats = {
    total: orders.length,
    pending: orders.filter(o => o.status === 'pending').length,
    processing: orders.filter(o => o.status === 'processing').length,
    completed: orders.filter(o => o.status === 'completed').length,
    cancelled: orders.filter(o => o.status === 'cancelled').length
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Orders</h1>
          <p className="text-muted-foreground mt-2">Manage customer orders and track status</p>
        </div>
        <Button variant="outline">
          <Download className="h-4 w-4 mr-2" />
          Export Orders
        </Button>
      </div>

      {/* Order Stats */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <Card className="border-border/50">
          <CardContent className="pt-4">
            <div className="text-2xl font-bold text-foreground">{orderStats.total}</div>
            <div className="text-sm text-muted-foreground">Total Orders</div>
          </CardContent>
        </Card>
        <Card className="border-yellow-200 bg-yellow-50">
          <CardContent className="pt-4">
            <div className="text-2xl font-bold text-yellow-800">{orderStats.pending}</div>
            <div className="text-sm text-yellow-700">Pending</div>
          </CardContent>
        </Card>
        <Card className="border-blue-200 bg-blue-50">
          <CardContent className="pt-4">
            <div className="text-2xl font-bold text-blue-800">{orderStats.processing}</div>
            <div className="text-sm text-blue-700">Processing</div>
          </CardContent>
        </Card>
        <Card className="border-green-200 bg-green-50">
          <CardContent className="pt-4">
            <div className="text-2xl font-bold text-green-800">{orderStats.completed}</div>
            <div className="text-sm text-green-700">Completed</div>
          </CardContent>
        </Card>
        <Card className="border-red-200 bg-red-50">
          <CardContent className="pt-4">
            <div className="text-2xl font-bold text-red-800">{orderStats.cancelled}</div>
            <div className="text-sm text-red-700">Cancelled</div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card className="shadow-sm border-border/50">
        <CardContent className="pt-6">
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by customer name, email, or order ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="processing">Processing</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Orders Table */}
      <Card className="shadow-sm border-border/50">
        <CardHeader>
          <CardTitle className="text-xl">Order Management</CardTitle>
          <CardDescription>
            {filteredOrders.length} orders found
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="border-border">
                <TableHead className="font-semibold">Order ID</TableHead>
                <TableHead className="font-semibold">Customer</TableHead>
                <TableHead className="font-semibold">Items</TableHead>
                <TableHead className="font-semibold">Total</TableHead>
                <TableHead className="font-semibold">Date</TableHead>
                <TableHead className="font-semibold">Status</TableHead>
                <TableHead className="font-semibold">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredOrders.map((order) => (
                <TableRow key={order.id} className="border-border hover:bg-muted/50">
                  <TableCell className="font-medium">#{order.id}</TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium">{order.customerName}</div>
                      <div className="text-sm text-muted-foreground">{order.customerEmail}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">
                      {order.items.map((item, index) => (
                        <div key={index}>
                          {item.quantity}x {item.name}
                        </div>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">${order.total.toFixed(2)}</TableCell>
                  <TableCell className="text-sm">{order.date}</TableCell>
                  <TableCell>
                    <Select 
                      value={order.status} 
                      onValueChange={(value) => handleStatusChange(order.id, value)}
                    >
                      <SelectTrigger className="w-[120px]">
                        <SelectValue>
                          <Badge variant={getStatusBadgeVariant(order.status)} className={getStatusColor(order.status)}>
                            {order.status}
                          </Badge>
                        </SelectValue>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="processing">Processing</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                        <SelectItem value="cancelled">Cancelled</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setSelectedOrder(order)}
                          className="hover:bg-primary/10"
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-md">
                        <DialogHeader>
                          <DialogTitle>Order Details - #{order.id}</DialogTitle>
                          <DialogDescription>Complete order information</DialogDescription>
                        </DialogHeader>
                        {selectedOrder && (
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-semibold text-foreground">Customer Information</h4>
                              <div className="text-sm text-muted-foreground mt-1">
                                <div>{selectedOrder.customerName}</div>
                                <div>{selectedOrder.customerEmail}</div>
                                <div>{selectedOrder.phone}</div>
                                <div>{selectedOrder.address}</div>
                              </div>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold text-foreground">Order Items</h4>
                              <div className="space-y-2 mt-1">
                                {selectedOrder.items.map((item, index) => (
                                  <div key={index} className="flex justify-between text-sm">
                                    <span>{item.quantity}x {item.name}</span>
                                    <span>${(item.quantity * item.price).toFixed(2)}</span>
                                  </div>
                                ))}
                                <div className="border-t pt-2 flex justify-between font-semibold">
                                  <span>Total</span>
                                  <span>${selectedOrder.total.toFixed(2)}</span>
                                </div>
                              </div>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold text-foreground">Order Status</h4>
                              <Badge 
                                variant={getStatusBadgeVariant(selectedOrder.status)} 
                                className={`${getStatusColor(selectedOrder.status)} mt-1`}
                              >
                                {selectedOrder.status}
                              </Badge>
                            </div>
                          </div>
                        )}
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminOrders;